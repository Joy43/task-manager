import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import Banner from "./Banner/Banner";
import Slider from "./Slider/slider";
import Taskform from "./Taskform/Taskform";

const Home = () => {
  return (
    <div className="gap-4 m-5">
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Slider></Slider>
      </div>
      <div>
        <Banner></Banner>
      </div>
      <div>
        <Taskform></Taskform>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
