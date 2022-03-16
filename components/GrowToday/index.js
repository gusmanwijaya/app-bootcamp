import CardGrowToday from "../CardGrowToday";

export default function GrowToday({ text, title }) {
  return (
    <section className="grow-today">
      <div className="container">
        <div className="sub-title mb-1" id="grow-today">
          <span className="text-gradient-pink">{text}</span>
        </div>
        <div className="title">{title}</div>
        <div className="mt-5 row gap">
          <CardGrowToday
            price="$229"
            img="assets/images/card-1.png"
            title="Learn Jira for Sprint Design Venture"
            category="Product Design"
            desc="Bandung, 22 Jan 2022"
          />
          <CardGrowToday
            price="FREE"
            img="assets/images/card-2.png"
            title="Team Management for Long Term"
            category="Product Design"
            desc="Jakarta, 11 Aug 2022"
          />
          <CardGrowToday
            price="$80"
            img="assets/images/card-3.png"
            title="Set Marketing Target For SaaS Bii"
            category="Product Design"
            desc="Bandung, 22 Jan 2022"
          />
          <CardGrowToday
            price="$90"
            img="assets/images/card-4.png"
            title="Google Adsense from Zero to Big Bucks"
            category="Product Design"
            desc="Jakarta, 11 Aug 2022"
          />
        </div>
      </div>
    </section>
  );
}
