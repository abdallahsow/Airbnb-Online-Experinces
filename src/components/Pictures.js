import Cooker from "../images/cooker.png";
import Worker from "../images/worker.png";
import Balina from "../images/balina.png";
import Food from "../images/food.png";
import Guitar from "../images/guitar.png";
import Piano from "../images/piano.png";
import Swimmer from "../images/swimmer.png";
import Yoga from "../images/yoga.png";
import Singer from "../images/singer.png";

export default function Pictures() {
  return (
    <section>
      <div className="pictures-section">
        <img src={Cooker} alt="" />
        {/* Group 1 */}
        <div className="group-style-1">
          <img src={Worker} alt="" />
          <img src={Balina} alt="" />
        </div>
        {/* Group 2 */}
        <div className="group-style-2">
          <img src={Food} alt="" />
          <img src={Guitar} alt="" />
        </div>
        {/* Group 3 */}
        <div className="group-style-3">
          <img src={Piano} alt="" />
          <img src={Swimmer} alt="" />
        </div>
        {/* Group 4 */}
        <div className="group-style-4">
          <img src={Yoga} alt="" />
          <img src={Singer} alt="" />
        </div>
      </div>
    </section>
  );
}
