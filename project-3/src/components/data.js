import Athlete from "../images/zaferes-usa.png";
import Star from "../images/star-icon.png";
import Hiking from "../images/mountain-bike.png";
import Maid from "../images/wedding.png";

const data = [
  {
    id: 1,
    openSpots: 0,
    img: Athlete,
    star: Star,
    rating: 5.0,
    reviews: 6,
    location: "USA",
    title: "Life lessons with Katie Zaferes",
    price: 136,
  },
  {
    id: 2,
    openSpots: 0,
    img: Maid,
    star: Star,
    rating: 5.0,
    reviews: 30,
    location: "USA",
    title: "Learn Wedding Photography",
    price: 125,
  },
  {
    id: 3,
    openSpots: 0,
    img: Hiking,
    star: Star,
    rating: 4.8,
    reviews: 2,
    location: "USA",
    title: "Group Mountain Biking",
    price: 50,
  }
];

export default data;
