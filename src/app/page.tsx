"use client";

import { useState } from "react";

type DailyRow = {
  month: string;
  monthShort: string;
  date: string;
  dateLabel: string;
  time: string;
  harry: string;
};

type OtherCastMonth = {
  month: string;
  casts: {
    role: string;
    names: string[];
  }[];
};

const crawledAt = "2026年6月26日 14:14 JST";

const dailyRows: DailyRow[] = [
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-02",
    "dateLabel": "9/2(水)",
    "time": "12:15",
    "harry": "上野聖太",
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-03",
    "dateLabel": "9/3(木)",
    "time": "12:15",
    "harry": "小野賢章",
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-04",
    "dateLabel": "9/4(金)",
    "time": "12:15",
    "harry": "平岡祐太",
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-05",
    "dateLabel": "9/5(土)",
    "time": "12:15",
    "harry": "小野賢章",
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-05",
    "dateLabel": "9/5(土)",
    "time": "18:15",
    "harry": "平岡祐太",
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-06",
    "dateLabel": "9/6(日)",
    "time": "12:15",
    "harry": "上野聖太",
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-08",
    "dateLabel": "9/8(火)",
    "time": "13:30",
    "harry": "小野賢章",
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-09",
    "dateLabel": "9/9(水)",
    "time": "12:15",
    "harry": "石丸幹二",
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-09",
    "dateLabel": "9/9(水)",
    "time": "18:15",
    "harry": "平岡祐太",
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-11",
    "dateLabel": "9/11(金)",
    "time": "12:15",
    "harry": "石丸幹二",
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-12",
    "dateLabel": "9/12(土)",
    "time": "12:15",
    "harry": "石丸幹二",
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-12",
    "dateLabel": "9/12(土)",
    "time": "18:15",
    "harry": "小野賢章",
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-13",
    "dateLabel": "9/13(日)",
    "time": "12:15",
    "harry": "平岡祐太",
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-15",
    "dateLabel": "9/15(火)",
    "time": "12:15",
    "harry": "平岡祐太",
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-16",
    "dateLabel": "9/16(水)",
    "time": "12:15",
    "harry": "上野聖太",
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-16",
    "dateLabel": "9/16(水)",
    "time": "18:15",
    "harry": "平岡祐太",
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-17",
    "dateLabel": "9/17(木)",
    "time": "18:15",
    "harry": "小野賢章",
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-18",
    "dateLabel": "9/18(金)",
    "time": "12:15",
    "harry": "平岡祐太",
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-19",
    "dateLabel": "9/19(土)",
    "time": "12:15",
    "harry": "小野賢章",
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-19",
    "dateLabel": "9/19(土)",
    "time": "18:15",
    "harry": "石丸幹二",
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-20",
    "dateLabel": "9/20(日)",
    "time": "12:15",
    "harry": "平岡祐太",
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-22",
    "dateLabel": "9/22(火)",
    "time": "12:15",
    "harry": "石丸幹二",
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-22",
    "dateLabel": "9/22(火)",
    "time": "18:15",
    "harry": "小野賢章",
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-23",
    "dateLabel": "9/23(水)",
    "time": "12:15",
    "harry": "石丸幹二",
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-24",
    "dateLabel": "9/24(木)",
    "time": "12:15",
    "harry": "小野賢章",
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-25",
    "dateLabel": "9/25(金)",
    "time": "12:15",
    "harry": "石丸幹二",
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-26",
    "dateLabel": "9/26(土)",
    "time": "12:15",
    "harry": "石丸幹二",
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-26",
    "dateLabel": "9/26(土)",
    "time": "18:15",
    "harry": "小野賢章",
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-27",
    "dateLabel": "9/27(日)",
    "time": "12:15",
    "harry": "石丸幹二",
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-29",
    "dateLabel": "9/29(火)",
    "time": "12:15",
    "harry": "石丸幹二",
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-30",
    "dateLabel": "9/30(水)",
    "time": "12:15",
    "harry": "平岡祐太",
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-30",
    "dateLabel": "9/30(水)",
    "time": "18:15",
    "harry": "石丸幹二",
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-01",
    "dateLabel": "10/1(木)",
    "time": "12:15",
    "harry": "小野賢章",
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-02",
    "dateLabel": "10/2(金)",
    "time": "12:15",
    "harry": "石丸幹二",
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-03",
    "dateLabel": "10/3(土)",
    "time": "12:15",
    "harry": "石丸幹二",
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-03",
    "dateLabel": "10/3(土)",
    "time": "18:15",
    "harry": "小野賢章",
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-04",
    "dateLabel": "10/4(日)",
    "time": "12:15",
    "harry": "石丸幹二",
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-06",
    "dateLabel": "10/6(火)",
    "time": "12:15",
    "harry": "小野賢章",
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-07",
    "dateLabel": "10/7(水)",
    "time": "12:15",
    "harry": "平岡祐太",
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-07",
    "dateLabel": "10/7(水)",
    "time": "18:15",
    "harry": "平岡祐太",
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-09",
    "dateLabel": "10/9(金)",
    "time": "12:15",
    "harry": "上野聖太",
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-10",
    "dateLabel": "10/10(土)",
    "time": "12:15",
    "harry": "平岡祐太",
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-10",
    "dateLabel": "10/10(土)",
    "time": "18:15",
    "harry": "上野聖太",
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-11",
    "dateLabel": "10/11(日)",
    "time": "12:15",
    "harry": "平岡祐太",
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-12",
    "dateLabel": "10/12(月)",
    "time": "12:15",
    "harry": "小野賢章",
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-13",
    "dateLabel": "10/13(火)",
    "time": "13:30",
    "harry": "平岡祐太",
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-14",
    "dateLabel": "10/14(水)",
    "time": "17:30",
    "harry": "平岡祐太",
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-16",
    "dateLabel": "10/16(金)",
    "time": "12:15",
    "harry": "上野聖太",
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-17",
    "dateLabel": "10/17(土)",
    "time": "13:30",
    "harry": "平岡祐太",
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-18",
    "dateLabel": "10/18(日)",
    "time": "12:15",
    "harry": "藤木直人",
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-18",
    "dateLabel": "10/18(日)",
    "time": "18:15",
    "harry": "小野賢章",
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-20",
    "dateLabel": "10/20(火)",
    "time": "12:15",
    "harry": "藤木直人",
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-21",
    "dateLabel": "10/21(水)",
    "time": "12:15",
    "harry": "藤木直人",
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-21",
    "dateLabel": "10/21(水)",
    "time": "18:15",
    "harry": "平岡祐太",
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-22",
    "dateLabel": "10/22(木)",
    "time": "12:15",
    "harry": "小野賢章",
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-23",
    "dateLabel": "10/23(金)",
    "time": "12:15",
    "harry": "上野聖太",
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-24",
    "dateLabel": "10/24(土)",
    "time": "12:15",
    "harry": "小野賢章",
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-24",
    "dateLabel": "10/24(土)",
    "time": "18:15",
    "harry": "上野聖太",
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-25",
    "dateLabel": "10/25(日)",
    "time": "貸切",
    "harry": "藤木直人",
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-27",
    "dateLabel": "10/27(火)",
    "time": "12:15",
    "harry": "平岡祐太",
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-28",
    "dateLabel": "10/28(水)",
    "time": "貸切",
    "harry": "平岡祐太",
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-28",
    "dateLabel": "10/28(水)",
    "time": "18:15",
    "harry": "藤木直人",
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-30",
    "dateLabel": "10/30(金)",
    "time": "12:15",
    "harry": "平岡祐太",
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-31",
    "dateLabel": "10/31(土)",
    "time": "12:15",
    "harry": "平岡祐太",
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-31",
    "dateLabel": "10/31(土)",
    "time": "18:15",
    "harry": "小野賢章",
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-01",
    "dateLabel": "11/1(日)",
    "time": "12:15",
    "harry": "藤木直人",
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-02",
    "dateLabel": "11/2(月)",
    "time": "12:15",
    "harry": "藤木直人",
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-03",
    "dateLabel": "11/3(火)",
    "time": "12:15",
    "harry": "藤木直人",
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-04",
    "dateLabel": "11/4(水)",
    "time": "12:15",
    "harry": "稲垣吾郎",
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-06",
    "dateLabel": "11/6(金)",
    "time": "12:15",
    "harry": "稲垣吾郎",
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-07",
    "dateLabel": "11/7(土)",
    "time": "12:15",
    "harry": "稲垣吾郎",
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-07",
    "dateLabel": "11/7(土)",
    "time": "18:15",
    "harry": "藤木直人",
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-08",
    "dateLabel": "11/8(日)",
    "time": "12:15",
    "harry": "稲垣吾郎",
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-09",
    "dateLabel": "11/9(月)",
    "time": "12:15",
    "harry": "藤木直人",
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-11",
    "dateLabel": "11/11(水)",
    "time": "13:30",
    "harry": "稲垣吾郎",
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-12",
    "dateLabel": "11/12(木)",
    "time": "12:15",
    "harry": "藤木直人",
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-12",
    "dateLabel": "11/12(木)",
    "time": "18:15",
    "harry": "稲垣吾郎",
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-13",
    "dateLabel": "11/13(金)",
    "time": "12:15",
    "harry": "平岡祐太",
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-14",
    "dateLabel": "11/14(土)",
    "time": "12:15",
    "harry": "稲垣吾郎",
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-14",
    "dateLabel": "11/14(土)",
    "time": "18:15",
    "harry": "平岡祐太",
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-15",
    "dateLabel": "11/15(日)",
    "time": "12:15",
    "harry": "稲垣吾郎",
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-16",
    "dateLabel": "11/16(月)",
    "time": "12:15",
    "harry": "藤木直人",
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-18",
    "dateLabel": "11/18(水)",
    "time": "12:15",
    "harry": "稲垣吾郎",
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-18",
    "dateLabel": "11/18(水)",
    "time": "18:15",
    "harry": "藤木直人",
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-19",
    "dateLabel": "11/19(木)",
    "time": "12:15",
    "harry": "稲垣吾郎",
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-20",
    "dateLabel": "11/20(金)",
    "time": "12:15",
    "harry": "稲垣吾郎",
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-21",
    "dateLabel": "11/21(土)",
    "time": "12:15",
    "harry": "平岡祐太",
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-21",
    "dateLabel": "11/21(土)",
    "time": "18:15",
    "harry": "稲垣吾郎",
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-22",
    "dateLabel": "11/22(日)",
    "time": "12:15",
    "harry": "上野聖太",
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-23",
    "dateLabel": "11/23(月)",
    "time": "12:15",
    "harry": "藤木直人",
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-25",
    "dateLabel": "11/25(水)",
    "time": "12:15",
    "harry": "稲垣吾郎",
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-25",
    "dateLabel": "11/25(水)",
    "time": "18:15",
    "harry": "平岡祐太",
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-26",
    "dateLabel": "11/26(木)",
    "time": "12:15",
    "harry": "稲垣吾郎",
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-27",
    "dateLabel": "11/27(金)",
    "time": "12:15",
    "harry": "稲垣吾郎",
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-28",
    "dateLabel": "11/28(土)",
    "time": "12:15",
    "harry": "平岡祐太",
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-28",
    "dateLabel": "11/28(土)",
    "time": "18:15",
    "harry": "稲垣吾郎",
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-29",
    "dateLabel": "11/29(日)",
    "time": "12:15",
    "harry": "平岡祐太",
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-01",
    "dateLabel": "12/1(火)",
    "time": "12:15",
    "harry": "藤原竜也",
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-02",
    "dateLabel": "12/2(水)",
    "time": "12:15",
    "harry": "藤原竜也",
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-02",
    "dateLabel": "12/2(水)",
    "time": "18:15",
    "harry": "稲垣吾郎",
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-03",
    "dateLabel": "12/3(木)",
    "time": "12:15",
    "harry": "藤原竜也",
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-04",
    "dateLabel": "12/4(金)",
    "time": "12:15",
    "harry": "稲垣吾郎",
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-05",
    "dateLabel": "12/5(土)",
    "time": "12:15",
    "harry": "稲垣吾郎",
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-05",
    "dateLabel": "12/5(土)",
    "time": "18:15",
    "harry": "藤原竜也",
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-06",
    "dateLabel": "12/6(日)",
    "time": "12:15",
    "harry": "藤原竜也",
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-08",
    "dateLabel": "12/8(火)",
    "time": "12:15",
    "harry": "上野聖太",
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-09",
    "dateLabel": "12/9(水)",
    "time": "12:15",
    "harry": "稲垣吾郎",
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-09",
    "dateLabel": "12/9(水)",
    "time": "18:15",
    "harry": "藤原竜也",
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-10",
    "dateLabel": "12/10(木)",
    "time": "12:15",
    "harry": "藤原竜也",
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-11",
    "dateLabel": "12/11(金)",
    "time": "12:15",
    "harry": "稲垣吾郎",
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-12",
    "dateLabel": "12/12(土)",
    "time": "12:15",
    "harry": "稲垣吾郎",
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-12",
    "dateLabel": "12/12(土)",
    "time": "18:15",
    "harry": "藤原竜也",
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-13",
    "dateLabel": "12/13(日)",
    "time": "13:30",
    "harry": "藤原竜也",
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-15",
    "dateLabel": "12/15(火)",
    "time": "12:15",
    "harry": "藤原竜也",
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-15",
    "dateLabel": "12/15(火)",
    "time": "18:15",
    "harry": "上野聖太",
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-16",
    "dateLabel": "12/16(水)",
    "time": "12:15",
    "harry": "藤原竜也",
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-17",
    "dateLabel": "12/17(木)",
    "time": "12:15",
    "harry": "稲垣吾郎",
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-18",
    "dateLabel": "12/18(金)",
    "time": "12:15",
    "harry": "稲垣吾郎",
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-19",
    "dateLabel": "12/19(土)",
    "time": "12:15",
    "harry": "藤原竜也",
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-19",
    "dateLabel": "12/19(土)",
    "time": "18:15",
    "harry": "稲垣吾郎",
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-20",
    "dateLabel": "12/20(日)",
    "time": "12:15",
    "harry": "藤原竜也",
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-22",
    "dateLabel": "12/22(火)",
    "time": "12:15",
    "harry": "上野聖太",
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-23",
    "dateLabel": "12/23(水)",
    "time": "12:15",
    "harry": "稲垣吾郎",
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-23",
    "dateLabel": "12/23(水)",
    "time": "18:15",
    "harry": "藤原竜也",
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-24",
    "dateLabel": "12/24(木)",
    "time": "12:15",
    "harry": "上野聖太",
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-25",
    "dateLabel": "12/25(金)",
    "time": "12:15",
    "harry": "藤原竜也",
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-25",
    "dateLabel": "12/25(金)",
    "time": "18:15",
    "harry": "稲垣吾郎",
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-26",
    "dateLabel": "12/26(土)",
    "time": "12:15",
    "harry": "藤原竜也",
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-27",
    "dateLabel": "12/27(日)",
    "time": "12:15",
    "harry": "稲垣吾郎",
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-27",
    "dateLabel": "12/27(日)",
    "time": "18:15",
    "harry": "藤原竜也",
  }
];

const otherCastMonths: OtherCastMonth[] = [
  {
    "month": "2026年9月",
    "casts": [
      {
        "role": "ハーマイオニー",
        "names": [
          "中別府葵",
          "酒井美紀",
          "松井玲奈",
          "奥村佳恵"
        ]
      },
      {
        "role": "ロン",
        "names": [
          "竪山隼太",
          "ひょっこりはん",
          "関町知弘"
        ]
      },
      {
        "role": "ドラコ",
        "names": [
          "松田慎也",
          "宮尾俊太郎",
          "内田朝陽"
        ]
      },
      {
        "role": "ジニー",
        "names": [
          "白羽ゆり",
          "安藤 聖",
          "吉井 怜"
        ]
      },
      {
        "role": "アルバス",
        "names": [
          "藤田ハル",
          "福山康平",
          "佐藤知恩"
        ]
      },
      {
        "role": "スコーピウス",
        "names": [
          "門田宗大",
          "浅見和哉",
          "久保和支"
        ]
      },
      {
        "role": "デルフィー",
        "names": [
          "高山璃子",
          "野邑光希",
          "横山千穂"
        ]
      },
      {
        "role": "マクゴナガル校長",
        "names": [
          "高橋ひとみ",
          "岡まゆみ"
        ]
      }
    ]
  },
  {
    "month": "2026年10月",
    "casts": [
      {
        "role": "ハーマイオニー",
        "names": [
          "中別府葵",
          "酒井美紀",
          "松井玲奈",
          "奥村佳恵"
        ]
      },
      {
        "role": "ロン",
        "names": [
          "竪山隼太",
          "ひょっこりはん",
          "関町知弘"
        ]
      },
      {
        "role": "ドラコ",
        "names": [
          "内田朝陽",
          "姜 暢雄",
          "渡辺邦斗"
        ]
      },
      {
        "role": "ジニー",
        "names": [
          "白羽ゆり",
          "安藤 聖",
          "吉井 怜"
        ]
      },
      {
        "role": "アルバス",
        "names": [
          "福山康平",
          "佐藤知恩"
        ]
      },
      {
        "role": "スコーピウス",
        "names": [
          "門田宗大",
          "西野 遼",
          "浅見和哉",
          "久保和支"
        ]
      },
      {
        "role": "デルフィー",
        "names": [
          "高山璃子",
          "野邑光希",
          "横山千穂"
        ]
      },
      {
        "role": "マクゴナガル校長",
        "names": [
          "高橋ひとみ",
          "岡まゆみ"
        ]
      }
    ]
  },
  {
    "month": "2026年11月",
    "casts": [
      {
        "role": "ハーマイオニー",
        "names": [
          "中別府葵",
          "酒井美紀",
          "奥村佳恵"
        ]
      },
      {
        "role": "ロン",
        "names": [
          "竪山隼太",
          "ひょっこりはん",
          "関町知弘"
        ]
      },
      {
        "role": "ドラコ",
        "names": [
          "松田慎也",
          "宮尾俊太郎",
          "内田朝陽",
          "姜 暢雄"
        ]
      },
      {
        "role": "ジニー",
        "names": [
          "白羽ゆり",
          "安藤 聖",
          "吉井 怜"
        ]
      },
      {
        "role": "アルバス",
        "names": [
          "藤田ハル",
          "福山康平",
          "佐藤知恩"
        ]
      },
      {
        "role": "スコーピウス",
        "names": [
          "門田宗大",
          "西野 遼",
          "浅見和哉",
          "久保和支"
        ]
      },
      {
        "role": "デルフィー",
        "names": [
          "宝意紗友莉",
          "野邑光希",
          "横山千穂"
        ]
      },
      {
        "role": "マクゴナガル校長",
        "names": [
          "高橋ひとみ",
          "岡まゆみ"
        ]
      }
    ]
  },
  {
    "month": "2026年12月",
    "casts": [
      {
        "role": "ハーマイオニー",
        "names": [
          "中別府葵",
          "酒井美紀",
          "奥村佳恵"
        ]
      },
      {
        "role": "ロン",
        "names": [
          "竪山隼太",
          "ひょっこりはん",
          "関町知弘"
        ]
      },
      {
        "role": "ドラコ",
        "names": [
          "松田慎也",
          "宮尾俊太郎",
          "姜 暢雄"
        ]
      },
      {
        "role": "ジニー",
        "names": [
          "馬渕英里何",
          "白羽ゆり",
          "安藤 聖",
          "吉井 怜"
        ]
      },
      {
        "role": "アルバス",
        "names": [
          "藤田ハル",
          "福山康平",
          "佐藤知恩"
        ]
      },
      {
        "role": "スコーピウス",
        "names": [
          "門田宗大",
          "西野 遼",
          "浅見和哉",
          "久保和支"
        ]
      },
      {
        "role": "デルフィー",
        "names": [
          "宝意紗友莉",
          "野邑光希",
          "横山千穂"
        ]
      },
      {
        "role": "マクゴナガル校長",
        "names": [
          "高橋ひとみ",
          "岡まゆみ"
        ]
      }
    ]
  }
];

const seatTypes = ["SS席", "Sプラス席", "S席", "A席", "B席", "C席", "9と4分の3番線シート"];

const seatPrices: Record<string, string> = {
  "SS席": "平17,000 / 休19,000",
  "Sプラス席": "平16,000 / 休17,000",
  "S席": "平15,000 / 休16,000",
  "A席": "平13,000 / 休14,000",
  "B席": "平11,000 / 休12,000",
  "C席": "7,000",
  "9と4分の3番線シート": "平20,000 / 休22,000",
};

const seatAvailability: Record<string, Record<string, boolean>> = {
  "2026-09-02-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": true,
    "9と4分の3番線シート": false
  },
  "2026-09-03-12:15": {
    "SS席": false,
    "Sプラス席": false,
    "S席": false,
    "A席": false,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-09-04-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": true,
    "9と4分の3番線シート": false
  },
  "2026-09-05-12:15": {
    "SS席": false,
    "Sプラス席": false,
    "S席": false,
    "A席": false,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-09-05-18:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-09-06-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-09-08-13:30": {
    "SS席": false,
    "Sプラス席": false,
    "S席": false,
    "A席": false,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-09-09-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": true,
    "9と4分の3番線シート": false
  },
  "2026-09-09-18:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": true,
    "9と4分の3番線シート": false
  },
  "2026-09-11-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-09-12-12:15": {
    "SS席": false,
    "Sプラス席": false,
    "S席": true,
    "A席": true,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-09-12-18:15": {
    "SS席": false,
    "Sプラス席": false,
    "S席": false,
    "A席": false,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-09-13-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": true,
    "9と4分の3番線シート": false
  },
  "2026-09-15-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-09-16-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": true,
    "9と4分の3番線シート": false
  },
  "2026-09-16-18:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": true,
    "9と4分の3番線シート": false
  },
  "2026-09-17-18:15": {
    "SS席": false,
    "Sプラス席": false,
    "S席": false,
    "A席": false,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-09-18-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": true,
    "9と4分の3番線シート": false
  },
  "2026-09-19-12:15": {
    "SS席": false,
    "Sプラス席": false,
    "S席": false,
    "A席": false,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-09-19-18:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-09-20-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-09-22-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-09-22-18:15": {
    "SS席": false,
    "Sプラス席": false,
    "S席": false,
    "A席": false,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-09-23-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-09-24-12:15": {
    "SS席": false,
    "Sプラス席": false,
    "S席": false,
    "A席": false,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-09-25-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": true,
    "9と4分の3番線シート": false
  },
  "2026-09-26-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-09-26-18:15": {
    "SS席": false,
    "Sプラス席": false,
    "S席": false,
    "A席": false,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-09-27-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": false,
    "A席": true,
    "B席": true,
    "C席": true,
    "9と4分の3番線シート": false
  },
  "2026-09-29-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": true,
    "9と4分の3番線シート": false
  },
  "2026-09-30-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": true,
    "9と4分の3番線シート": false
  },
  "2026-09-30-18:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": true,
    "9と4分の3番線シート": false
  },
  "2026-10-01-12:15": {
    "SS席": false,
    "Sプラス席": false,
    "S席": false,
    "A席": false,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-10-02-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": true,
    "9と4分の3番線シート": false
  },
  "2026-10-03-12:15": {
    "SS席": false,
    "Sプラス席": false,
    "S席": true,
    "A席": true,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-10-03-18:15": {
    "SS席": false,
    "Sプラス席": false,
    "S席": false,
    "A席": false,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-10-04-12:15": {
    "SS席": false,
    "Sプラス席": false,
    "S席": true,
    "A席": false,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-10-06-12:15": {
    "SS席": false,
    "Sプラス席": false,
    "S席": false,
    "A席": false,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-10-07-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": true,
    "9と4分の3番線シート": false
  },
  "2026-10-07-18:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": true,
    "9と4分の3番線シート": false
  },
  "2026-10-09-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-10-10-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-10-10-18:15": {
    "SS席": true,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-10-11-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": true,
    "9と4分の3番線シート": false
  },
  "2026-10-12-12:15": {
    "SS席": false,
    "Sプラス席": false,
    "S席": false,
    "A席": false,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-10-13-13:30": {
    "SS席": true,
    "Sプラス席": true,
    "S席": true,
    "A席": false,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-10-14-17:30": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": true,
    "9と4分の3番線シート": false
  },
  "2026-10-16-12:15": {
    "SS席": true,
    "Sプラス席": true,
    "S席": false,
    "A席": false,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-10-17-13:30": {
    "SS席": false,
    "Sプラス席": false,
    "S席": false,
    "A席": false,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-10-18-12:15": {
    "SS席": false,
    "Sプラス席": false,
    "S席": false,
    "A席": true,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-10-18-18:15": {
    "SS席": false,
    "Sプラス席": false,
    "S席": false,
    "A席": false,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-10-20-12:15": {
    "SS席": false,
    "Sプラス席": false,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-10-21-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": false,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-10-21-18:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": true,
    "9と4分の3番線シート": false
  },
  "2026-10-22-12:15": {
    "SS席": false,
    "Sプラス席": false,
    "S席": false,
    "A席": false,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-10-23-12:15": {
    "SS席": true,
    "Sプラス席": true,
    "S席": false,
    "A席": true,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-10-24-12:15": {
    "SS席": false,
    "Sプラス席": false,
    "S席": false,
    "A席": false,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-10-24-18:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-10-25-12:15": {
    "SS席": false,
    "Sプラス席": false,
    "S席": false,
    "A席": false,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-10-27-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": true,
    "9と4分の3番線シート": false
  },
  "2026-10-28-12:15": {
    "SS席": false,
    "Sプラス席": false,
    "S席": false,
    "A席": false,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-10-28-18:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": true,
    "9と4分の3番線シート": false
  },
  "2026-10-30-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": false,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-10-31-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": false,
    "A席": true,
    "B席": true,
    "C席": true,
    "9と4分の3番線シート": false
  },
  "2026-10-31-18:15": {
    "SS席": false,
    "Sプラス席": false,
    "S席": false,
    "A席": false,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-11-01-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-11-02-12:15": {
    "SS席": true,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-11-03-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-11-04-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-11-06-12:15": {
    "SS席": false,
    "Sプラス席": false,
    "S席": false,
    "A席": false,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-11-07-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-11-07-18:15": {
    "SS席": true,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-11-08-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-11-09-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-11-11-13:30": {
    "SS席": false,
    "Sプラス席": false,
    "S席": false,
    "A席": true,
    "B席": true,
    "C席": true,
    "9と4分の3番線シート": false
  },
  "2026-11-12-12:15": {
    "SS席": true,
    "Sプラス席": true,
    "S席": false,
    "A席": false,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-11-12-18:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-11-13-12:15": {
    "SS席": true,
    "Sプラス席": true,
    "S席": true,
    "A席": false,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-11-14-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-11-14-18:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": true,
    "9と4分の3番線シート": false
  },
  "2026-11-15-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-11-16-12:15": {
    "SS席": true,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": true,
    "9と4分の3番線シート": false
  },
  "2026-11-18-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": true,
    "9と4分の3番線シート": false
  },
  "2026-11-18-18:15": {
    "SS席": true,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": true,
    "9と4分の3番線シート": false
  },
  "2026-11-19-12:15": {
    "SS席": false,
    "Sプラス席": false,
    "S席": false,
    "A席": false,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-11-20-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": false,
    "A席": true,
    "B席": true,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-11-21-12:15": {
    "SS席": true,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": true,
    "9と4分の3番線シート": false
  },
  "2026-11-21-18:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-11-22-12:15": {
    "SS席": true,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-11-23-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-11-25-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": true,
    "9と4分の3番線シート": false
  },
  "2026-11-25-18:15": {
    "SS席": true,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": true,
    "9と4分の3番線シート": false
  },
  "2026-11-26-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": false,
    "A席": true,
    "B席": true,
    "C席": true,
    "9と4分の3番線シート": false
  },
  "2026-11-27-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": true,
    "9と4分の3番線シート": false
  },
  "2026-11-28-12:15": {
    "SS席": true,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": true,
    "9と4分の3番線シート": false
  },
  "2026-11-28-18:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-11-29-12:15": {
    "SS席": true,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": true,
    "9と4分の3番線シート": false
  },
  "2026-12-01-12:15": {
    "SS席": false,
    "Sプラス席": false,
    "S席": false,
    "A席": false,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-12-02-12:15": {
    "SS席": false,
    "Sプラス席": false,
    "S席": false,
    "A席": true,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-12-02-18:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-12-03-12:15": {
    "SS席": false,
    "Sプラス席": false,
    "S席": false,
    "A席": false,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-12-04-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-12-05-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-12-05-18:15": {
    "SS席": false,
    "Sプラス席": false,
    "S席": false,
    "A席": false,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-12-06-12:15": {
    "SS席": false,
    "Sプラス席": false,
    "S席": false,
    "A席": false,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-12-08-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": true,
    "9と4分の3番線シート": false
  },
  "2026-12-09-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-12-09-18:15": {
    "SS席": false,
    "Sプラス席": false,
    "S席": true,
    "A席": false,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-12-10-12:15": {
    "SS席": false,
    "Sプラス席": false,
    "S席": false,
    "A席": true,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-12-11-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-12-12-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-12-12-18:15": {
    "SS席": false,
    "Sプラス席": false,
    "S席": false,
    "A席": true,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-12-13-13:30": {
    "SS席": false,
    "Sプラス席": false,
    "S席": false,
    "A席": false,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-12-15-12:15": {
    "SS席": false,
    "Sプラス席": false,
    "S席": true,
    "A席": true,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-12-15-18:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-12-16-12:15": {
    "SS席": false,
    "Sプラス席": false,
    "S席": false,
    "A席": true,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-12-17-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": true,
    "9と4分の3番線シート": false
  },
  "2026-12-18-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": true,
    "9と4分の3番線シート": false
  },
  "2026-12-19-12:15": {
    "SS席": false,
    "Sプラス席": false,
    "S席": false,
    "A席": true,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-12-19-18:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-12-20-12:15": {
    "SS席": false,
    "Sプラス席": false,
    "S席": false,
    "A席": false,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-12-22-12:15": {
    "SS席": true,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": true,
    "9と4分の3番線シート": false
  },
  "2026-12-23-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-12-23-18:15": {
    "SS席": false,
    "Sプラス席": false,
    "S席": true,
    "A席": false,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-12-24-12:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": true,
    "9と4分の3番線シート": false
  },
  "2026-12-25-12:15": {
    "SS席": false,
    "Sプラス席": false,
    "S席": false,
    "A席": false,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-12-25-18:15": {
    "SS席": false,
    "Sプラス席": true,
    "S席": true,
    "A席": true,
    "B席": true,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-12-26-12:15": {
    "SS席": false,
    "Sプラス席": false,
    "S席": false,
    "A席": false,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-12-27-12:15": {
    "SS席": false,
    "Sプラス席": false,
    "S席": false,
    "A席": false,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  },
  "2026-12-27-18:15": {
    "SS席": false,
    "Sプラス席": false,
    "S席": false,
    "A席": false,
    "B席": false,
    "C席": false,
    "9と4分の3番線シート": false
  }
};

const links = [
  {
    label: "公式チケット",
    href: "https://www.harrypotter-stage.jp/schedule-tickets/",
  },
  {
    label: "キャストスケジュール",
    href: "https://www.harrypotter-stage.jp/schedule/",
  },
  {
    label: "TBSチケット",
    href: "https://tickets.tbs.co.jp/harrypotteronstage/",
  },
];

const months = Array.from(new Set(dailyRows.map((row) => row.month)));

function getOtherCasts(month: string) {
  return otherCastMonths.find((item) => item.month === month)?.casts ?? [];
}

function getSeatAvailability(row: DailyRow) {
  return seatAvailability[row.date + "-" + row.time] ?? {};
}

function isWeekend(date: string) {
  const day = new Date(`${date}T00:00:00+09:00`).getDay();
  return day === 0 || day === 6;
}

export default function Home() {
  const [selectedMonth, setSelectedMonth] = useState(months[0]);
  const monthIndex = months.indexOf(selectedMonth);
  const visibleRows = dailyRows.filter((row) => row.month === selectedMonth);
  const previousMonth = months[(monthIndex - 1 + months.length) % months.length];
  const nextMonth = months[(monthIndex + 1) % months.length];

  return (
    <main className="pageShell">
      <header className="simpleHeader">
        <div>
          <p>last update: {crawledAt}</p>
          <h1>ハリー・ポッター舞台 日別販売状況</h1>
        </div>
        <nav aria-label="確認リンク">
          {links.map((link) => (
            <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <div className="monthSwitcher" aria-label="月切り替え">
        <button type="button" onClick={() => setSelectedMonth(previousMonth)} aria-label={`${previousMonth}へ`}>
          ＜
        </button>
        <strong>{selectedMonth.replace("2026年", "")}</strong>
        <button type="button" onClick={() => setSelectedMonth(nextMonth)} aria-label={`${nextMonth}へ`}>
          ＞
        </button>
      </div>

      <section className="tableSection" aria-label="日別販売状況">
        <div className="tableWrap">
          <table className="scheduleTable">
            <thead>
              <tr>
                <th>日付</th>
                <th>開演</th>
                <th>キャスト</th>
                {seatTypes.map((seat) => (
                  <th key={seat}>
                    <span className="seatName">{seat}</span>
                    <small>{seatPrices[seat]}</small>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {visibleRows.map((row) => {
                const seats = getSeatAvailability(row);
                const isSoldOut = seatTypes.every((seat) => seats[seat] === false);
                const rowClassName = [
                  isSoldOut ? "isSold" : "",
                  isWeekend(row.date) ? "isWeekend" : "",
                ].filter(Boolean).join(" ");
                return (
                  <tr className={rowClassName || undefined} key={row.date + row.time}>
                    <td><strong>{row.dateLabel}</strong></td>
                    <td>{row.time}</td>
                    <td>
                      <details className="castDetails">
                        <summary>{row.harry}</summary>
                        <div className="castPanel">
                          <p><b>ハリー</b>{row.harry}</p>
                          {getOtherCasts(row.month).map((cast) => (
                            <p key={row.date + row.time + cast.role}>
                              <b>{cast.role}</b>{cast.names.join(" / ")}
                            </p>
                          ))}
                        </div>
                      </details>
                    </td>
                    {seatTypes.map((seat) => {
                      const available = seats[seat] === true;
                      return (
                        <td className={available ? "seatMark ok" : "seatMark ng"} key={seat}>
                          {available ? "○" : "×"}
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
    </main>
  );
}
