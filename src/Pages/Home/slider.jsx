import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import pic1 from "../../assets/photo/3.jpg";
import pic2 from "../../assets/photo/2.jpg";
import pic3 from "../../assets/photo/1.jpg";

const Slider = () => {
  const onChange = (index) => {
    console.log(`Carousel slide changed to index ${index}`);
    // You can add your custom logic here
  };

  const onClickItem = (index) => {
    console.log(`Clicked on item in slide ${index}`);
    // You can add your custom logic here
  };

  const onClickThumb = (index) => {
    console.log(`Clicked on thumbnail for slide ${index}`);
    // You can add your custom logic here
  };

  return (
    <Carousel
      showArrows={true}
      onChange={onChange}
      onClickItem={onClickItem}
      onClickThumb={onClickThumb}
    >
      <div>
        <img src={pic1} alt="Slide 1" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={pic2} alt="Slide 2" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={pic3} alt="Slide 3" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default Slider;
