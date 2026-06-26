"use client";

import { useEffect, useState } from "react";

import { crawledAt, dailyRows, seatAvailability, seatPrices, seatTypes, type DailyRow } from "@/data/schedule";

const links = [
  {
    label: "公式チケット",
    icon: "confirmation_number",
    href: "https://www.harrypotter-stage.jp/schedule-tickets/",
  },
];

const months = Array.from(new Set(dailyRows.map((row) => row.month)));
const holidayDates = new Set(["2026-09-21", "2026-09-22", "2026-09-23", "2026-10-12", "2026-11-03", "2026-11-23"]);

function getMonthParam(month: string) {
  return month.replace("2026年", "").replace("月", "");
}

function getMonthFromParam(value: string | null) {
  if (!value) return months[0];

  const normalizedValue = value.replace(/^0/, "").replace("月", "");
  return months.find((month) => getMonthParam(month) === normalizedValue) ?? months[0];
}

function getDailyCasts(row: DailyRow) {
  return [{ role: "ハリー", names: [row.harry] }];
}

function getSeatAvailability(row: DailyRow) {
  return seatAvailability[row.date + "-" + row.time] ?? {};
}

function getDayType(date: string) {
  const day = new Date(`${date}T00:00:00+09:00`).getDay();
  if (day === 6) return "saturday";
  if (day === 0) return "sunday";
  return "weekday";
}

function getSeatPrice(seat: string, dayType: "weekday" | "holiday") {
  const price = seatPrices[seat];
  return dayType === "weekday" ? price.weekday : price.holiday;
}

function getPriceType(date: string) {
  return getDayType(date) === "weekday" && !holidayDates.has(date) ? "weekday" : "holiday";
}

export default function Home() {
  const [selectedMonth, setSelectedMonth] = useState(months[0]);
  const [selectedCastRow, setSelectedCastRow] = useState<DailyRow | null>(null);
  const monthIndex = months.indexOf(selectedMonth);
  const visibleRows = dailyRows.filter((row) => row.month === selectedMonth);
  const previousMonth = months[monthIndex - 1];
  const nextMonth = months[monthIndex + 1];

  useEffect(() => {
    const syncMonthFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      setSelectedMonth(getMonthFromParam(params.get("month")));
    };

    syncMonthFromUrl();
    window.addEventListener("popstate", syncMonthFromUrl);

    return () => {
      window.removeEventListener("popstate", syncMonthFromUrl);
    };
  }, []);

  const changeMonth = (month?: string) => {
    if (!month) return;

    const params = new URLSearchParams(window.location.search);
    params.set("month", getMonthParam(month));
    const nextUrl = `${window.location.pathname}?${params.toString()}${window.location.hash}`;
    window.history.pushState(null, "", nextUrl);
    setSelectedMonth(month);
  };

  return (
    <main className="pageShell">
      <header className="simpleHeader">
        <div>
          <h1>
            舞台『ハリー・ポッターと呪いの子』
            <span>チケット販売状況</span>
          </h1>
        </div>
        <nav aria-label="確認リンク">
          {links.map((link) => (
            <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>
              <span className="mi" aria-hidden="true">{link.icon}</span>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <div className="monthSwitcher" aria-label="月切り替え">
        <button
          type="button"
          onClick={() => changeMonth(previousMonth)}
          disabled={!previousMonth}
          aria-label={previousMonth ? `${previousMonth}へ` : "前の月はありません"}
        >
          <span className="mi" aria-hidden="true">chevron_left</span>
        </button>
        <strong>{selectedMonth.replace("2026年", "")}</strong>
        <button
          type="button"
          onClick={() => changeMonth(nextMonth)}
          disabled={!nextMonth}
          aria-label={nextMonth ? `${nextMonth}へ` : "次の月はありません"}
        >
          <span className="mi" aria-hidden="true">chevron_right</span>
        </button>
      </div>

      <section className="tableSection" aria-label="日別販売状況">
        <div className="tableWrap">
          <table className="scheduleTable">
            <thead>
              <tr>
                <th>日時</th>
                <th>キャスト</th>
                {seatTypes.map((seat) => (
                  <th key={seat}>
                    <span className="seatName">{seat}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {visibleRows.map((row) => {
                const seats = getSeatAvailability(row);
                const dayType = getDayType(row.date);
                const priceType = getPriceType(row.date);
                const isSoldOut = row.time === "貸切" || seatTypes.every((seat) => seats[seat] === false);
                const rowClassName = [
                  dayType === "weekday" ? "" : dayType,
                  isSoldOut ? "isSoldOut" : "",
                ].filter(Boolean).join(" ");
                return (
                  <tr className={rowClassName || undefined} key={row.date + row.time}>
                    <td className={isSoldOut ? "dateTimeCell isSoldOut" : "dateTimeCell"}>
                      <strong>{row.dateLabel}</strong>
                      <small>{row.time}</small>
                    </td>
                    <td>
                      <button type="button" className="castButton" onClick={() => setSelectedCastRow(row)}>
                        {row.harry}
                      </button>
                    </td>
                    {seatTypes.map((seat) => {
                      const available = seats[seat] === true;
                      return (
                        <td className={available ? "seatMark ok" : "seatMark ng"} key={seat}>
                          <span aria-label={available ? "空席あり" : "予定枚数終了"}>{available ? "○" : "×"}</span>
                          <small>{getSeatPrice(seat, priceType)}</small>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
      <footer className="pageFooter">
        <p>※正確な情報は公式サイト、チケット販売サイトを参照してください／9と4分の3番線シートはすべて売り切れ</p>
        <p>last update: {crawledAt}</p>
      </footer>
      {selectedCastRow ? (
        <div className="castModalBackdrop" role="presentation" onClick={() => setSelectedCastRow(null)}>
          <section
            className="castModal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cast-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="castModalHeader">
              <div>
                <p>{selectedCastRow.dateLabel} {selectedCastRow.time}</p>
                <h2 id="cast-modal-title">キャスト</h2>
              </div>
              <button type="button" onClick={() => setSelectedCastRow(null)} aria-label="閉じる">
                <span className="mi" aria-hidden="true">close</span>
              </button>
            </div>
            <div className="castModalBody">
              {getDailyCasts(selectedCastRow).map((cast) => (
                <p key={selectedCastRow.date + selectedCastRow.time + cast.role}>
                  <b>{cast.role}</b>
                  <span>{cast.names.join(" / ")}</span>
                </p>
              ))}
              {getDailyCasts(selectedCastRow).length === 1 ? (
                <small>主演以外のキャストは公式サイトで未発表です</small>
              ) : null}
            </div>
          </section>
        </div>
      ) : null}
    </main>
  );
}
