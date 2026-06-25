type MonthData = {
  month: string;
  period: string;
  ticketStatus: string;
  salesEnd: string;
  note: string;
  harry: string[];
  casts: {
    role: string;
    names: string[];
  }[];
};

const updatedAt = "2026年6月26日";

const months: MonthData[] = [
  {
    month: "9月",
    period: "2026/9/2(水) - 9/30(水)",
    ticketStatus: "販売期間中 / 一般発売 / 先着 / 座席選択",
    salesEnd: "チケットぴあ掲載: 2026/9/27(日) 23:59まで",
    note: "9月公演は複数プレイガイドで販売中表示。公演回ごとの残席は購入画面で確認。",
    harry: ["石丸幹二", "平岡祐太", "上野聖太", "小野賢章"],
    casts: [
      {
        role: "ハーマイオニー・グレンジャー",
        names: ["中別府葵", "酒井美紀", "松井玲奈", "奥村佳恵"],
      },
      { role: "ロン・ウィーズリー", names: ["竪山隼太", "ひょっこりはん", "関町知弘"] },
      { role: "ドラコ・マルフォイ", names: ["松田慎也", "宮尾俊太郎", "内田朝陽"] },
      { role: "ジニー・ポッター", names: ["白羽ゆり", "安藤 聖", "吉井 怜"] },
      { role: "アルバス・ポッター", names: ["藤田ハル", "福山康平", "佐藤知恩"] },
      { role: "スコーピウス・マルフォイ", names: ["門田宗大", "浅見和哉", "久保和支"] },
      { role: "デルフィー", names: ["高山璃子", "野邑光希", "横山千穂"] },
      { role: "マクゴナガル校長", names: ["高橋ひとみ", "岡まゆみ"] },
    ],
  },
  {
    month: "10月",
    period: "2026/10/1(木) - 10/31(土)",
    ticketStatus: "発売中 / 一般発売 / 先着 / 座席選択",
    salesEnd: "ローチケ掲載: 月間公演として発売中",
    note: "石丸幹二、藤木直人、小野賢章が重なる月。ハリー役で選びたい人は要確認。",
    harry: ["石丸幹二", "藤木直人", "平岡祐太", "上野聖太", "小野賢章"],
    casts: [
      {
        role: "ハーマイオニー・グレンジャー",
        names: ["中別府葵", "酒井美紀", "松井玲奈", "奥村佳恵"],
      },
      { role: "ロン・ウィーズリー", names: ["竪山隼太", "ひょっこりはん", "関町知弘"] },
      { role: "ドラコ・マルフォイ", names: ["内田朝陽", "姜 暢雄", "渡辺邦斗"] },
      { role: "ジニー・ポッター", names: ["白羽ゆり", "安藤 聖", "吉井 怜"] },
      { role: "アルバス・ポッター", names: ["福山康平", "佐藤知恩"] },
      {
        role: "スコーピウス・マルフォイ",
        names: ["門田宗大", "西野 遼", "浅見和哉", "久保和支"],
      },
      { role: "デルフィー", names: ["高山璃子", "野邑光希", "横山千穂"] },
      { role: "マクゴナガル校長", names: ["高橋ひとみ", "岡まゆみ"] },
    ],
  },
  {
    month: "11月",
    period: "2026/11/1(日) - 11/29(日)",
    ticketStatus: "発売中 / 一般発売 / 先着 / 座席選択",
    salesEnd: "ローチケ掲載: 月間公演として発売中",
    note: "稲垣吾郎の出演予定が入る月。月末は11/29(日)までの枠として掲載。",
    harry: ["藤木直人", "平岡祐太", "稲垣吾郎", "上野聖太"],
    casts: [
      { role: "ハーマイオニー・グレンジャー", names: ["中別府葵", "酒井美紀", "奥村佳恵"] },
      { role: "ロン・ウィーズリー", names: ["竪山隼太", "ひょっこりはん", "関町知弘"] },
      {
        role: "ドラコ・マルフォイ",
        names: ["松田慎也", "宮尾俊太郎", "内田朝陽", "姜 暢雄"],
      },
      { role: "ジニー・ポッター", names: ["白羽ゆり", "安藤 聖", "吉井 怜"] },
      { role: "アルバス・ポッター", names: ["藤田ハル", "福山康平", "佐藤知恩"] },
      {
        role: "スコーピウス・マルフォイ",
        names: ["門田宗大", "西野 遼", "浅見和哉", "久保和支"],
      },
      { role: "デルフィー", names: ["宝意紗友莉", "野邑光希", "横山千穂"] },
      { role: "マクゴナガル校長", names: ["高橋ひとみ", "岡まゆみ"] },
    ],
  },
  {
    month: "12月",
    period: "2026/12/1(火) - 12/27(日)",
    ticketStatus: "発売中 / 一般発売 / 先着 / 座席選択",
    salesEnd: "千秋楽: 2026/12/27(日)",
    note: "千秋楽月。藤原竜也、稲垣吾郎、上野聖太の出演予定が発表済み。",
    harry: ["藤原竜也", "稲垣吾郎", "上野聖太"],
    casts: [
      { role: "ハーマイオニー・グレンジャー", names: ["中別府葵", "酒井美紀", "奥村佳恵"] },
      { role: "ロン・ウィーズリー", names: ["竪山隼太", "ひょっこりはん", "関町知弘"] },
      { role: "ドラコ・マルフォイ", names: ["松田慎也", "宮尾俊太郎", "姜 暢雄"] },
      { role: "ジニー・ポッター", names: ["馬渕英里何", "白羽ゆり", "安藤 聖", "吉井 怜"] },
      { role: "アルバス・ポッター", names: ["藤田ハル", "福山康平", "佐藤知恩"] },
      {
        role: "スコーピウス・マルフォイ",
        names: ["門田宗大", "西野 遼", "浅見和哉", "久保和支"],
      },
      { role: "デルフィー", names: ["宝意紗友莉", "野邑光希", "横山千穂"] },
      { role: "マクゴナガル校長", names: ["高橋ひとみ", "岡まゆみ"] },
    ],
  },
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
    label: "チケットぴあ: 2026年9月公演",
    href: "https://t.pia.jp/pia/event/event.do?eventBundleCd=b2669039",
  },
  {
    label: "ローチケ: 2026年9月以降の月別販売",
    href: "https://l-tike.com/play/mevent/?mid=633328",
  },
  {
    label: "ホリプロステージ: 公演情報",
    href: "https://horipro-stage.jp/stage/harrypotter/",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="heroImage" aria-hidden="true" />
        <div className="heroScrim" />
        <div className="heroContent">
          <p className="eyebrow">非公式まとめ / {updatedAt}確認</p>
          <h1>舞台「ハリー・ポッターと呪いの子」9月以降の予約・出演予定</h1>
          <p className="lead">
            東京・TBS赤坂ACTシアター公演について、2026年9月から千秋楽までの販売状況と、
            公式発表済みの月別キャスト予定を見やすく整理しました。
          </p>
          <div className="heroActions" aria-label="主要リンク">
            <a href="https://www.harrypotter-stage.jp/schedule-tickets/" target="_blank" rel="noreferrer">
              公式チケットへ
            </a>
            <a href="#months">月別に見る</a>
          </div>
        </div>
      </section>

      <section className="summary" aria-label="概要">
        <div>
          <span className="summaryLabel">上演期間</span>
          <strong>2026/12/27(日) 千秋楽まで</strong>
        </div>
        <div>
          <span className="summaryLabel">9月以降</span>
          <strong>9月・10月・11月・12月が販売中表示</strong>
        </div>
        <div>
          <span className="summaryLabel">注意</span>
          <strong>残席数は購入画面で都度確認</strong>
        </div>
      </section>

      <section className="contentBand" id="months">
        <div className="sectionHead">
          <p className="eyebrow dark">Monthly guide</p>
          <h2>月別の予約可能状況とハリー役</h2>
          <p>
            「発売中」「販売期間中」は各販売ページで確認できた表記です。座席の有無や席種は購入直前に変わるため、
            このページでは販売枠の有無までをまとめています。
          </p>
        </div>

        <div className="monthGrid">
          {months.map((month) => (
            <article className="monthCard" key={month.month}>
              <div className="monthTop">
                <div>
                  <p className="month">{month.month}</p>
                  <h3>{month.period}</h3>
                </div>
                <span className="status">販売中</span>
              </div>
              <p className="ticketStatus">{month.ticketStatus}</p>
              <p className="salesEnd">{month.salesEnd}</p>
              <div className="harryBlock">
                <span>ハリー・ポッター役</span>
                <div>
                  {month.harry.map((name) => (
                    <b key={name}>{name}</b>
                  ))}
                </div>
              </div>
              <p className="note">{month.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="castBand">
        <div className="sectionHead compact">
          <p className="eyebrow dark">Cast schedule</p>
          <h2>公式発表済みの月別キャスト予定</h2>
        </div>

        <div className="castList">
          {months.map((month) => (
            <article className="castMonth" key={`${month.month}-casts`}>
              <h3>{month.month}</h3>
              <div className="castRows">
                <div className="castRow primary">
                  <span>ハリー・ポッター</span>
                  <p>{month.harry.join(" / ")}</p>
                </div>
                {month.casts.map((cast) => (
                  <div className="castRow" key={`${month.month}-${cast.role}`}>
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
            キャストは公演回ごとに異なり、変更の可能性があります。購入前に公式キャストスケジュールと販売サイトの表示を必ず確認してください。
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
