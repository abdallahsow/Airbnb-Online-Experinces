export default function Card(props) {
  let badgeText
      if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
      } else if (props.platform === "Online") {
        badgeText = "ONLINE"
      }
  return (
    <section className="cards">
      {badgeText && <p className="availability">{badgeText}</p>}
      <img className="cards--pic" src={props.img} alt="Olympic Swimmer" />
      <div>
        <img className="cards--star" src={props.star} alt="" />
        <p className="cards--text">
          {props.rating} <span className="text--location">({props.reviews}) • {props.location}</span>
        </p>
      </div>
      <p className="cards--text">{props.title}</p>
      <p className="cards--price">
        <strong>From ${props.price}</strong> / person
      </p>
    </section>
  );
}
