import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true, 
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img
            src=""
            alt="Slide 1"
          />
        </div>
        <div>
          <img
            src=""
            alt="Slide 2"
          />
        </div>
        <div>
          <img
            src=""
            alt="Slide 3"
          />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
