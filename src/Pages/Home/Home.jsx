import Navbar from "../Shared/Navbar/Navbar";
import Slider from "./Slider/slider";

const Home = () => {
  return (
    <div className="gap-4">
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Slider></Slider>
      </div>
    </div>
  );
};

export default Home;
