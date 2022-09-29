export default function Card({
  openSpots,
  platform,
  img,
  star,
  reviews,
  location,
  title,
  price,
  rating,
}) {
  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (platform === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <section className="cards">
      {badgeText && <p className="availability">{badgeText}</p>}
      <img className="cards--pic" src={img} alt="Olympic Swimmer" />
      <div>
        <img className="cards--star" src={star} alt="" />
        <p className="cards--text">
          {rating}{" "}
          <span className="text--location">
            ({reviews}) • {location}
          </span>
        </p>
      </div>
      <p className="cards--text">{title}</p>
      <p className="cards--price">
        <strong>From ${price}</strong> / person
      </p>
    </section>
  );
}
