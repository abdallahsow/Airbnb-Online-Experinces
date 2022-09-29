import Athlete from "../images/zaferes-usa.png";
import Star from "../images/star-icon.png";
import Hiking from "../images/mountain-bike.png";
import Maid from "../images/wedding.png";

const cardData = [
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
    platform: "In presence"
  },
  {
    id: 2,
    openSpots: 10,
    img: Maid,
    star: Star,
    rating: 5.0,
    reviews: 30,
    location: "USA",
    title: "Learn Wedding Photography",
    price: 125,
    platform: "Online"
  },
  {
    id: 3,
    openSpots: 25,
    img: Hiking,
    star: Star,
    rating: 4.8,
    reviews: 2,
    location: "USA",
    title: "Group Mountain Biking",
    price: 50,
    platform: "In presence"
  }
];

export default cardData;
