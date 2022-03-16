/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function CardGrowToday({ price, img, title, category, desc }) {
  return (
    <div className="col-lg-3 col-md-6 col-12">
      <div className="card-grow h-100">
        <span className="badge-pricing">{price}</span>
        <img src={img} alt="semina" />
        <div className="card-content">
          <div className="card-title">{title}</div>
          <div className="card-subtitle">{category}</div>
          <div className="description">{desc}</div>
          <Link href="/details">
            <a className="stretched-link" />
          </Link>
        </div>
      </div>
    </div>
  );
}
