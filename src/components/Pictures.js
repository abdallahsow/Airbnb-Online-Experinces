import SinglePic from "./SinglePic";
import picturesData from "./picturesData";
import Cooker from "../images/cooker.png";

export default function Pictures() {
  return (
    <section>
      <div className="pictures-section">
        <img src={Cooker} alt="" />
        {picturesData.map((item, index) => (
          <SinglePic key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
