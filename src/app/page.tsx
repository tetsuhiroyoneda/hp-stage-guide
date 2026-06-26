type DailyRow = {
  month: string;
  monthShort: string;
  date: string;
  dateLabel: string;
  time: string;
  harry: string;
  status: string;
  statusDetail: string;
  statusKind: string;
};

type OtherCastMonth = {
  month: string;
  casts: {
    role: string;
    names: string[];
  }[];
};

const updatedAt = "2026年6月26日";

const dailyRows: DailyRow[] = [
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-02",
    "dateLabel": "9/2(水)",
    "time": "12:15",
    "harry": "上野聖太",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-03",
    "dateLabel": "9/3(木)",
    "time": "12:15",
    "harry": "小野賢章",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-04",
    "dateLabel": "9/4(金)",
    "time": "12:15",
    "harry": "平岡祐太",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-05",
    "dateLabel": "9/5(土)",
    "time": "12:15",
    "harry": "小野賢章",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-05",
    "dateLabel": "9/5(土)",
    "time": "18:15",
    "harry": "平岡祐太",
    "status": "販売対象",
    "statusDetail": "鑑賞サポート公演。完売は購入画面で確認",
    "statusKind": "open support"
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-06",
    "dateLabel": "9/6(日)",
    "time": "12:15",
    "harry": "上野聖太",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-08",
    "dateLabel": "9/8(火)",
    "time": "13:30",
    "harry": "小野賢章",
    "status": "販売対象",
    "statusDetail": "13:30開演。完売は購入画面で確認",
    "statusKind": "open special"
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-09",
    "dateLabel": "9/9(水)",
    "time": "12:15",
    "harry": "石丸幹二",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-09",
    "dateLabel": "9/9(水)",
    "time": "18:15",
    "harry": "平岡祐太",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-11",
    "dateLabel": "9/11(金)",
    "time": "12:15",
    "harry": "石丸幹二",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-12",
    "dateLabel": "9/12(土)",
    "time": "12:15",
    "harry": "石丸幹二",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-12",
    "dateLabel": "9/12(土)",
    "time": "18:15",
    "harry": "小野賢章",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-13",
    "dateLabel": "9/13(日)",
    "time": "12:15",
    "harry": "平岡祐太",
    "status": "販売対象",
    "statusDetail": "鑑賞サポート公演。完売は購入画面で確認",
    "statusKind": "open support"
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-15",
    "dateLabel": "9/15(火)",
    "time": "12:15",
    "harry": "平岡祐太",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-16",
    "dateLabel": "9/16(水)",
    "time": "12:15",
    "harry": "上野聖太",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-16",
    "dateLabel": "9/16(水)",
    "time": "18:15",
    "harry": "平岡祐太",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-17",
    "dateLabel": "9/17(木)",
    "time": "18:15",
    "harry": "小野賢章",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-18",
    "dateLabel": "9/18(金)",
    "time": "12:15",
    "harry": "平岡祐太",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-19",
    "dateLabel": "9/19(土)",
    "time": "12:15",
    "harry": "小野賢章",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-19",
    "dateLabel": "9/19(土)",
    "time": "18:15",
    "harry": "石丸幹二",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-20",
    "dateLabel": "9/20(日)",
    "time": "12:15",
    "harry": "平岡祐太",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-22",
    "dateLabel": "9/22(火)",
    "time": "12:15",
    "harry": "石丸幹二",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-22",
    "dateLabel": "9/22(火)",
    "time": "18:15",
    "harry": "小野賢章",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-23",
    "dateLabel": "9/23(水)",
    "time": "12:15",
    "harry": "石丸幹二",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-24",
    "dateLabel": "9/24(木)",
    "time": "12:15",
    "harry": "小野賢章",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-25",
    "dateLabel": "9/25(金)",
    "time": "12:15",
    "harry": "石丸幹二",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-26",
    "dateLabel": "9/26(土)",
    "time": "12:15",
    "harry": "石丸幹二",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-26",
    "dateLabel": "9/26(土)",
    "time": "18:15",
    "harry": "小野賢章",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-27",
    "dateLabel": "9/27(日)",
    "time": "12:15",
    "harry": "石丸幹二",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-29",
    "dateLabel": "9/29(火)",
    "time": "12:15",
    "harry": "石丸幹二",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-30",
    "dateLabel": "9/30(水)",
    "time": "12:15",
    "harry": "平岡祐太",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年9月",
    "monthShort": "9月",
    "date": "2026-09-30",
    "dateLabel": "9/30(水)",
    "time": "18:15",
    "harry": "石丸幹二",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-01",
    "dateLabel": "10/1(木)",
    "time": "12:15",
    "harry": "小野賢章",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-02",
    "dateLabel": "10/2(金)",
    "time": "12:15",
    "harry": "石丸幹二",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-03",
    "dateLabel": "10/3(土)",
    "time": "12:15",
    "harry": "石丸幹二",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-03",
    "dateLabel": "10/3(土)",
    "time": "18:15",
    "harry": "小野賢章",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-04",
    "dateLabel": "10/4(日)",
    "time": "12:15",
    "harry": "石丸幹二",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-06",
    "dateLabel": "10/6(火)",
    "time": "12:15",
    "harry": "小野賢章",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-07",
    "dateLabel": "10/7(水)",
    "time": "12:15",
    "harry": "平岡祐太",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-07",
    "dateLabel": "10/7(水)",
    "time": "18:15",
    "harry": "平岡祐太",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-09",
    "dateLabel": "10/9(金)",
    "time": "12:15",
    "harry": "上野聖太",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-10",
    "dateLabel": "10/10(土)",
    "time": "12:15",
    "harry": "平岡祐太",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-10",
    "dateLabel": "10/10(土)",
    "time": "18:15",
    "harry": "上野聖太",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-11",
    "dateLabel": "10/11(日)",
    "time": "12:15",
    "harry": "平岡祐太",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-12",
    "dateLabel": "10/12(月)",
    "time": "12:15",
    "harry": "小野賢章",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-13",
    "dateLabel": "10/13(火)",
    "time": "13:30",
    "harry": "平岡祐太",
    "status": "販売対象",
    "statusDetail": "13:30開演。完売は購入画面で確認",
    "statusKind": "open special"
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-14",
    "dateLabel": "10/14(水)",
    "time": "17:30",
    "harry": "平岡祐太",
    "status": "販売対象",
    "statusDetail": "17:30開演。完売は購入画面で確認",
    "statusKind": "open special"
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-16",
    "dateLabel": "10/16(金)",
    "time": "12:15",
    "harry": "上野聖太",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-17",
    "dateLabel": "10/17(土)",
    "time": "13:30",
    "harry": "平岡祐太",
    "status": "貸切/販売なし",
    "statusDetail": "公式カレンダーで貸切扱い",
    "statusKind": "reserved"
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-18",
    "dateLabel": "10/18(日)",
    "time": "12:15",
    "harry": "藤木直人",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-18",
    "dateLabel": "10/18(日)",
    "time": "18:15",
    "harry": "小野賢章",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-20",
    "dateLabel": "10/20(火)",
    "time": "12:15",
    "harry": "藤木直人",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-21",
    "dateLabel": "10/21(水)",
    "time": "12:15",
    "harry": "藤木直人",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-21",
    "dateLabel": "10/21(水)",
    "time": "18:15",
    "harry": "平岡祐太",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-22",
    "dateLabel": "10/22(木)",
    "time": "12:15",
    "harry": "小野賢章",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-23",
    "dateLabel": "10/23(金)",
    "time": "12:15",
    "harry": "上野聖太",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-24",
    "dateLabel": "10/24(土)",
    "time": "12:15",
    "harry": "小野賢章",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-24",
    "dateLabel": "10/24(土)",
    "time": "18:15",
    "harry": "上野聖太",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-25",
    "dateLabel": "10/25(日)",
    "time": "貸切",
    "harry": "藤木直人",
    "status": "貸切/販売なし",
    "statusDetail": "公式カレンダーで貸切扱い",
    "statusKind": "reserved"
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-27",
    "dateLabel": "10/27(火)",
    "time": "12:15",
    "harry": "平岡祐太",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-28",
    "dateLabel": "10/28(水)",
    "time": "貸切",
    "harry": "平岡祐太",
    "status": "貸切/販売なし",
    "statusDetail": "公式カレンダーで貸切扱い",
    "statusKind": "reserved"
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-28",
    "dateLabel": "10/28(水)",
    "time": "18:15",
    "harry": "藤木直人",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-30",
    "dateLabel": "10/30(金)",
    "time": "12:15",
    "harry": "平岡祐太",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-31",
    "dateLabel": "10/31(土)",
    "time": "12:15",
    "harry": "平岡祐太",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年10月",
    "monthShort": "10月",
    "date": "2026-10-31",
    "dateLabel": "10/31(土)",
    "time": "18:15",
    "harry": "小野賢章",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-01",
    "dateLabel": "11/1(日)",
    "time": "12:15",
    "harry": "藤木直人",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-02",
    "dateLabel": "11/2(月)",
    "time": "12:15",
    "harry": "藤木直人",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-03",
    "dateLabel": "11/3(火)",
    "time": "12:15",
    "harry": "藤木直人",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-04",
    "dateLabel": "11/4(水)",
    "time": "12:15",
    "harry": "稲垣吾郎",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-06",
    "dateLabel": "11/6(金)",
    "time": "12:15",
    "harry": "稲垣吾郎",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-07",
    "dateLabel": "11/7(土)",
    "time": "12:15",
    "harry": "稲垣吾郎",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-07",
    "dateLabel": "11/7(土)",
    "time": "18:15",
    "harry": "藤木直人",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-08",
    "dateLabel": "11/8(日)",
    "time": "12:15",
    "harry": "稲垣吾郎",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-09",
    "dateLabel": "11/9(月)",
    "time": "12:15",
    "harry": "藤木直人",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-11",
    "dateLabel": "11/11(水)",
    "time": "13:30",
    "harry": "稲垣吾郎",
    "status": "販売対象",
    "statusDetail": "13:30開演。完売は購入画面で確認",
    "statusKind": "open special"
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-12",
    "dateLabel": "11/12(木)",
    "time": "12:15",
    "harry": "藤木直人",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-12",
    "dateLabel": "11/12(木)",
    "time": "18:15",
    "harry": "稲垣吾郎",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-13",
    "dateLabel": "11/13(金)",
    "time": "12:15",
    "harry": "平岡祐太",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-14",
    "dateLabel": "11/14(土)",
    "time": "12:15",
    "harry": "稲垣吾郎",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-14",
    "dateLabel": "11/14(土)",
    "time": "18:15",
    "harry": "平岡祐太",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-15",
    "dateLabel": "11/15(日)",
    "time": "12:15",
    "harry": "稲垣吾郎",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-16",
    "dateLabel": "11/16(月)",
    "time": "12:15",
    "harry": "藤木直人",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-18",
    "dateLabel": "11/18(水)",
    "time": "12:15",
    "harry": "稲垣吾郎",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-18",
    "dateLabel": "11/18(水)",
    "time": "18:15",
    "harry": "藤木直人",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-19",
    "dateLabel": "11/19(木)",
    "time": "12:15",
    "harry": "稲垣吾郎",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-20",
    "dateLabel": "11/20(金)",
    "time": "12:15",
    "harry": "稲垣吾郎",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-21",
    "dateLabel": "11/21(土)",
    "time": "12:15",
    "harry": "平岡祐太",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-21",
    "dateLabel": "11/21(土)",
    "time": "18:15",
    "harry": "稲垣吾郎",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-22",
    "dateLabel": "11/22(日)",
    "time": "12:15",
    "harry": "上野聖太",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-23",
    "dateLabel": "11/23(月)",
    "time": "12:15",
    "harry": "藤木直人",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-25",
    "dateLabel": "11/25(水)",
    "time": "12:15",
    "harry": "稲垣吾郎",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-25",
    "dateLabel": "11/25(水)",
    "time": "18:15",
    "harry": "平岡祐太",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-26",
    "dateLabel": "11/26(木)",
    "time": "12:15",
    "harry": "稲垣吾郎",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-27",
    "dateLabel": "11/27(金)",
    "time": "12:15",
    "harry": "稲垣吾郎",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-28",
    "dateLabel": "11/28(土)",
    "time": "12:15",
    "harry": "平岡祐太",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-28",
    "dateLabel": "11/28(土)",
    "time": "18:15",
    "harry": "稲垣吾郎",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年11月",
    "monthShort": "11月",
    "date": "2026-11-29",
    "dateLabel": "11/29(日)",
    "time": "12:15",
    "harry": "平岡祐太",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-01",
    "dateLabel": "12/1(火)",
    "time": "12:15",
    "harry": "藤原竜也",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-02",
    "dateLabel": "12/2(水)",
    "time": "12:15",
    "harry": "藤原竜也",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-02",
    "dateLabel": "12/2(水)",
    "time": "18:15",
    "harry": "稲垣吾郎",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-03",
    "dateLabel": "12/3(木)",
    "time": "12:15",
    "harry": "藤原竜也",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-04",
    "dateLabel": "12/4(金)",
    "time": "12:15",
    "harry": "稲垣吾郎",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-05",
    "dateLabel": "12/5(土)",
    "time": "12:15",
    "harry": "稲垣吾郎",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-05",
    "dateLabel": "12/5(土)",
    "time": "18:15",
    "harry": "藤原竜也",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-06",
    "dateLabel": "12/6(日)",
    "time": "12:15",
    "harry": "藤原竜也",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-08",
    "dateLabel": "12/8(火)",
    "time": "12:15",
    "harry": "上野聖太",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-09",
    "dateLabel": "12/9(水)",
    "time": "12:15",
    "harry": "稲垣吾郎",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-09",
    "dateLabel": "12/9(水)",
    "time": "18:15",
    "harry": "藤原竜也",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-10",
    "dateLabel": "12/10(木)",
    "time": "12:15",
    "harry": "藤原竜也",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-11",
    "dateLabel": "12/11(金)",
    "time": "12:15",
    "harry": "稲垣吾郎",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-12",
    "dateLabel": "12/12(土)",
    "time": "12:15",
    "harry": "稲垣吾郎",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-12",
    "dateLabel": "12/12(土)",
    "time": "18:15",
    "harry": "藤原竜也",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-13",
    "dateLabel": "12/13(日)",
    "time": "13:30",
    "harry": "藤原竜也",
    "status": "貸切/販売なし",
    "statusDetail": "公式カレンダーで貸切扱い",
    "statusKind": "reserved"
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-15",
    "dateLabel": "12/15(火)",
    "time": "12:15",
    "harry": "藤原竜也",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-15",
    "dateLabel": "12/15(火)",
    "time": "18:15",
    "harry": "上野聖太",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-16",
    "dateLabel": "12/16(水)",
    "time": "12:15",
    "harry": "藤原竜也",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-17",
    "dateLabel": "12/17(木)",
    "time": "12:15",
    "harry": "稲垣吾郎",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-18",
    "dateLabel": "12/18(金)",
    "time": "12:15",
    "harry": "稲垣吾郎",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-19",
    "dateLabel": "12/19(土)",
    "time": "12:15",
    "harry": "藤原竜也",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-19",
    "dateLabel": "12/19(土)",
    "time": "18:15",
    "harry": "稲垣吾郎",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-20",
    "dateLabel": "12/20(日)",
    "time": "12:15",
    "harry": "藤原竜也",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-22",
    "dateLabel": "12/22(火)",
    "time": "12:15",
    "harry": "上野聖太",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-23",
    "dateLabel": "12/23(水)",
    "time": "12:15",
    "harry": "稲垣吾郎",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-23",
    "dateLabel": "12/23(水)",
    "time": "18:15",
    "harry": "藤原竜也",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-24",
    "dateLabel": "12/24(木)",
    "time": "12:15",
    "harry": "上野聖太",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-25",
    "dateLabel": "12/25(金)",
    "time": "12:15",
    "harry": "藤原竜也",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-25",
    "dateLabel": "12/25(金)",
    "time": "18:15",
    "harry": "稲垣吾郎",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-26",
    "dateLabel": "12/26(土)",
    "time": "12:15",
    "harry": "藤原竜也",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-27",
    "dateLabel": "12/27(日)",
    "time": "12:15",
    "harry": "稲垣吾郎",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
  },
  {
    "month": "2026年12月",
    "monthShort": "12月",
    "date": "2026-12-27",
    "dateLabel": "12/27(日)",
    "time": "18:15",
    "harry": "藤原竜也",
    "status": "販売対象",
    "statusDetail": "月別販売枠は発売中。完売は購入画面で確認",
    "statusKind": "open"
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

const links = [
  {
    label: "公式サイト: 公演日程・チケット",
    href: "https://www.harrypotter-stage.jp/schedule-tickets/",
  },
  {
    label: "公式サイト: キャストスケジュール",
    href: "https://www.harrypotter-stage.jp/schedule/",
  },
  {
    label: "公式ニュース: 2026年8月から12月の出演予定",
    href: "https://www.harrypotter-stage.jp/news_detail/20260601_monthly/",
  },
  {
    label: "TBSチケット: ハリー・ポッターと呪いの子",
    href: "https://tickets.tbs.co.jp/harrypotteronstage/",
  },
  {
    label: "ローチケ: 月別販売ページ",
    href: "https://l-tike.com/play/mevent/?mid=633328",
  },
  {
    label: "チケットぴあ: 公演一覧",
    href: "https://t.pia.jp/pia/events/harrypotter-stage",
  },
];

const months = Array.from(new Set(dailyRows.map((row) => row.month)));
const openCount = dailyRows.filter((row) => row.status === "販売対象").length;
const reservedCount = dailyRows.filter((row) => row.statusKind.includes("reserved")).length;

export default function Home() {
  return (
    <main>
      <section className="hero compactHero">
        <div className="heroImage" aria-hidden="true" />
        <div className="heroScrim" />
        <div className="heroContent">
          <p className="eyebrow">非公式まとめ / {updatedAt}確認</p>
          <h1>舞台「ハリー・ポッターと呪いの子」日別キャスト・販売状況</h1>
          <p className="lead">
            2026年9月以降の各公演について、公式キャストスケジュールで日別に出ているハリー役と、
            公式カレンダー上の販売対象・貸切状況を1日単位でまとめました。
          </p>
          <div className="heroActions" aria-label="主要リンク">
            <a href="https://www.harrypotter-stage.jp/schedule-tickets/" target="_blank" rel="noreferrer">
              公式チケットへ
            </a>
            <a href="#daily">日別一覧へ</a>
          </div>
        </div>
      </section>

      <section className="summary" aria-label="概要">
        <div>
          <span className="summaryLabel">対象期間</span>
          <strong>2026/9/2(水) - 12/27(日)</strong>
        </div>
        <div>
          <span className="summaryLabel">日別掲載数</span>
          <strong>{dailyRows.length}公演</strong>
        </div>
        <div>
          <span className="summaryLabel">公式カレンダー</span>
          <strong>{openCount}公演が販売対象 / {reservedCount}公演が貸切</strong>
        </div>
      </section>

      <section className="contentBand" id="daily">
        <div className="sectionHead">
          <p className="eyebrow dark">Daily guide</p>
          <h2>日別のキャストと売り切れ状況</h2>
          <p>
            日別で確定的に掲載できるキャストは、公式キャストスケジュールに出ているハリー・ポッター役です。
            席種ごとの完売・残席は販売サイトの購入画面で変動するため、この一覧では「販売対象」「貸切/販売なし」と、購入画面での確認が必要な旨を分けて表示しています。
          </p>
        </div>

        <div className="legend" aria-label="凡例">
          <span><i className="dot open" />販売対象</span>
          <span><i className="dot reserved" />貸切/販売なし</span>
          <span><i className="dot special" />特別開演時間・サポート公演</span>
        </div>

        <div className="dailyMonths">
          {months.map((month) => {
            const rows = dailyRows.filter((row) => row.month === month);
            return (
              <section className="dailyMonth" key={month}>
                <div className="dailyMonthHead">
                  <h3>{month}</h3>
                  <span>{rows.length}公演</span>
                </div>
                <div className="dailyTableWrap">
                  <table className="dailyTable">
                    <thead>
                      <tr>
                        <th>日付</th>
                        <th>開演</th>
                        <th>ハリー役</th>
                        <th>売り切れ/販売状況</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((row) => (
                        <tr key={row.date + "-" + row.time}>
                          <td>
                            <span className="dateText">{row.dateLabel}</span>
                          </td>
                          <td>{row.time}</td>
                          <td>
                            <strong>{row.harry}</strong>
                          </td>
                          <td>
                            <span className={"statusPill " + row.statusKind}>{row.status}</span>
                            <small>{row.statusDetail}</small>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <section className="castBand">
        <div className="sectionHead compact">
          <p className="eyebrow dark">Other roles</p>
          <h2>その他キャストは月別予定で確認</h2>
          <p>
            ハリー役以外は、公式ニュースで月別の出演予定として発表されている範囲をまとめています。
            実際の出演者は公演回ごとに変更される可能性があります。
          </p>
        </div>

        <div className="otherCastGrid">
          {otherCastMonths.map((month) => (
            <article className="otherCastCard" key={month.month}>
              <h3>{month.month}</h3>
              <div className="castRows">
                {month.casts.map((cast) => (
                  <div className="castRow" key={month.month + cast.role}>
                    <span>{cast.role}</span>
                    <p>{cast.names.join(" / ")}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contentBand last">
        <div className="sectionHead compact">
          <p className="eyebrow dark">Ticket links</p>
          <h2>購入・確認リンク</h2>
          <p>
            完売状況は販売サイトごと、席種ごと、購入画面のタイミングごとに変わります。
            気になる日が決まったら、必ず公式サイトまたは販売サイトで最新表示を確認してください。
          </p>
        </div>
        <div className="linkGrid">
          {links.map((link) => (
            <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>
              <span>{link.label}</span>
              <small>{new URL(link.href).hostname}</small>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
