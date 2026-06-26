import fs from "node:fs";
import path from "node:path";

const DATA_FILE = path.resolve("src/data/schedule.ts");
const CHANNEL_ID = "e0f1e79b-c7d1-4db4-9e2a-c3dfa955a253";
const BASE_URL = "https://tbs.my.urakata.app";
const PRODUCT_LIST_URL = `${BASE_URL}/v1alpha1/salesChannels/${CHANNEL_ID}/seatSalesProducts`;
const WAITING_URL = `${BASE_URL}/v1/waitingroom/bases/tbs/waitings`;
const ADMISSION_URL = `${BASE_URL}/v1/waitingroom/bases/tbs/admissions`;
const LIST_SCHEDULES_URL = `${BASE_URL}/asoview.resource.urakatabooking.v1alpha1.UrakataBookingService/ListEventSchedules`;
const TARGET_MONTHS = new Set(["9", "10", "11", "12"]);
const PRESERVED_SOLD_OUT_SEATS = new Set(["9と4分の3番線シート"]);

const baseHeaders = {
  accept: "application/json, text/plain, */*",
  "content-type": "application/json",
  "user-agent": "Mozilla/5.0",
  "x-app-type": "urakata-direct",
};

function readLiteral(source, startMarker, endMarker = null) {
  const start = source.indexOf(startMarker);
  if (start === -1) throw new Error(`Missing marker: ${startMarker}`);
  const valueStart = source.indexOf("=", start) + 1;
  const end = endMarker ? source.indexOf(endMarker, valueStart) : source.lastIndexOf(";");
  if (end === -1) throw new Error(`Missing marker: ${endMarker}`);
  return source.slice(valueStart, end).trim().replace(/;$/, "");
}

function parseLiteral(source, startMarker, endMarker) {
  const literal = readLiteral(source, startMarker, endMarker);
  return Function(`"use strict"; return (${literal});`)();
}

function formatJstDate(date = new Date()) {
  const parts = new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${values.year}年${Number(values.month)}月${Number(values.day)}日 ${values.hour}:${values.minute} JST`;
}

function normalizeTime(value) {
  return value ? value.slice(0, 5) : "";
}

function isAvailableSeat(seat, detail, schedule) {
  if (!schedule.isOnSale || !detail.isBookable) return false;
  if (!seat.stockRemainingConditionType) return true;
  return !/SOLD_OUT|OUT_OF_STOCK|NO_STOCK/.test(seat.stockRemainingConditionType);
}

async function fetchJson(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      ...baseHeaders,
      referer: `${BASE_URL}/channels/${CHANNEL_ID}/products`,
      ...options.headers,
    },
  });

  const text = await response.text();
  if (!response.ok) {
    throw new Error(`${response.status} ${url}: ${text.slice(0, 240)}`);
  }
  return text ? JSON.parse(text) : {};
}

async function postJson(url, body, headers = {}) {
  return fetchJson(url, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });
}

async function getAdmissionHeaders() {
  const waiting = await postJson(WAITING_URL, {});
  const admission = await postJson(ADMISSION_URL, {
    wct: waiting.wct,
    wst: waiting.wst,
  });

  if (!admission.at || !admission.wst) {
    throw new Error("Waiting room admission tokens were not returned.");
  }

  return {
    "x-at": admission.at,
    "x-wst": admission.wst,
  };
}

function getTargetProducts(products) {
  return products.filter((product) => {
    const title = product.salesProductDescriptionTitle ?? "";
    const match = title.match(/ハリー・ポッター.*2026年(\d+)月/);
    return match && TARGET_MONTHS.has(match[1]);
  });
}

async function crawlSeatAvailability() {
  const productList = await fetchJson(PRODUCT_LIST_URL);
  const products = getTargetProducts(productList.salesProducts ?? []);
  if (products.length === 0) {
    throw new Error("No target Harry Potter ticket products were found.");
  }

  const admissionHeaders = await getAdmissionHeaders();
  const nextAvailability = {};

  for (const product of products) {
    const schedules = await postJson(
      LIST_SCHEDULES_URL,
      { salesProductId: product.name, isSecretProduct: false },
      admissionHeaders,
    );

    for (const schedule of schedules.eventSchedules ?? []) {
      for (const detail of schedule.eventScheduleDetails ?? []) {
        const key = `${schedule.eventDate}-${normalizeTime(detail.eventTime?.startTime)}`;
        nextAvailability[key] ??= {};

        for (const seat of detail.seatTypes ?? []) {
          nextAvailability[key][seat.seatTypeName] = isAvailableSeat(seat, detail, schedule);
        }
      }
    }
  }

  return nextAvailability;
}

function buildDataFile({ dailyRows, seatTypes, seatPrices, seatAvailability, crawledAt }) {
  return `export type DailyRow = {
  month: string;
  monthShort: string;
  date: string;
  dateLabel: string;
  time: string;
  harry: string;
};

export const crawledAt = ${JSON.stringify(crawledAt)};

export const dailyRows: DailyRow[] = ${JSON.stringify(dailyRows, null, 2)};

export const seatTypes = ${JSON.stringify(seatTypes)};

export const seatPrices: Record<string, { weekday: string; holiday: string }> = ${JSON.stringify(seatPrices, null, 2)};

export const seatAvailability: Record<string, Record<string, boolean>> = ${JSON.stringify(seatAvailability, null, 2)};
`;
}

function mergeAvailability(existingAvailability, crawledAvailability, seatTypes) {
  const merged = structuredClone(existingAvailability);

  for (const [key, seats] of Object.entries(crawledAvailability)) {
    merged[key] ??= {};
    for (const [seatName, available] of Object.entries(seats)) {
      if (seatTypes.includes(seatName) && !PRESERVED_SOLD_OUT_SEATS.has(seatName)) {
        merged[key][seatName] = available;
      }
    }
  }

  for (const seats of Object.values(merged)) {
    for (const seatName of PRESERVED_SOLD_OUT_SEATS) {
      if (seatName in seats) seats[seatName] = false;
    }
  }

  return merged;
}

async function main() {
  const source = fs.readFileSync(DATA_FILE, "utf8");
  const dailyRows = parseLiteral(source, "export const dailyRows", "export const seatTypes");
  const seatTypes = parseLiteral(source, "export const seatTypes", "export const seatPrices");
  const seatPrices = parseLiteral(source, "export const seatPrices", "export const seatAvailability");
  const existingAvailability = parseLiteral(source, "export const seatAvailability");
  const crawledAvailability = await crawlSeatAvailability();
  const seatAvailability = mergeAvailability(existingAvailability, crawledAvailability, seatTypes);
  const crawledAt = formatJstDate();

  fs.writeFileSync(DATA_FILE, buildDataFile({
    dailyRows,
    seatTypes,
    seatPrices,
    seatAvailability,
    crawledAt,
  }));

  console.log(`Updated ${Object.keys(crawledAvailability).length} performances at ${crawledAt}.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
