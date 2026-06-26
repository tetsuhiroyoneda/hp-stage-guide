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

const seatTypes = ["SS席", "Sプラス席", "S席", "A席", "B席", "C席"];

const seatPrices: Record<string, { weekday: string; holiday: string }> = {
  "SS席": { weekday: "¥17,000", holiday: "¥19,000" },
  "Sプラス席": { weekday: "¥16,000", holiday: "¥17,000" },
  "S席": { weekday: "¥15,000", holiday: "¥16,000" },
  "A席": { weekday: "¥13,000", holiday: "¥14,000" },
  "B席": { weekday: "¥11,000", holiday: "¥12,000" },
  "C席": { weekday: "¥7,000", holiday: "¥7,000" },
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
    icon: "confirmation_number",
    href: "https://www.harrypotter-stage.jp/schedule-tickets/",
  },
  {
    label: "TBSチケット",
    icon: "local_activity",
    href: "https://tickets.tbs.co.jp/harrypotteronstage/",
  },
];

const months = Array.from(new Set(dailyRows.map((row) => row.month)));
const holidayDates = new Set(["2026-09-21", "2026-09-22", "2026-09-23", "2026-10-12", "2026-11-03", "2026-11-23"]);

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
          onClick={() => previousMonth && setSelectedMonth(previousMonth)}
          disabled={!previousMonth}
          aria-label={previousMonth ? `${previousMonth}へ` : "前の月はありません"}
        >
          <span className="mi" aria-hidden="true">chevron_left</span>
        </button>
        <strong>{selectedMonth.replace("2026年", "")}</strong>
        <button
          type="button"
          onClick={() => nextMonth && setSelectedMonth(nextMonth)}
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
                          {available ? <small>{getSeatPrice(seat, priceType)}</small> : null}
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
