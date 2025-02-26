import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const ImageSlider = () => {
  const [images, setImages] = useState([]);
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

  useEffect(() => {
    axios.get("http://localhost:8000/furniture/images/slider")
      .then(response => {
        console.log("Полученные данные:", response.data);
        setImages(response.data);
      })
      .catch(error => console.error("Ошибка при загрузке изображений:", error));
  }, []);
  return (
    <div className="slider-container">
      <Slider {...settings}>
  {images.map((image, index) => {
    console.log("image.url:", image.image_url); // Выводим в консоль
    return (
      <div key={index}>
        <img src={`http://localhost:8000${image.image_url}`} alt={`Slide ${index + 1}`} />
      </div>
        );
      })}
    </Slider>
    </div>
  );
};

export default ImageSlider;
