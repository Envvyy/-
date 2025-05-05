import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const COLORS = {
  background: '#282e3a',
  text: '#dddddd',
  accent: '#c0b78e',
};

const Page = styled.div`
  background-color: ${COLORS.background};
  color: ${COLORS.text};
  min-height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: ${COLORS.accent};
  margin-bottom: 1rem;
`;

const Description = styled.p`
  max-width: 800px;
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 1rem 0;
`;

const Price = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${COLORS.accent};
  margin-bottom: 2rem;
`;

const StyledSlider = styled(Slider)`
  width: 90%;
  max-width: 800px;
  margin-bottom: 2rem;

  .slick-slide img {
    width: 100%;
    border-radius: 12px;
  }
`;

const ProductPage = () => {
  const images = [
    '/images/sofa1.jpg',
    '/images/sofa2.jpg',
    '/images/sofa3.jpg'
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true
  };

  return (
    <Page>
      <Title>Диван Madrid</Title>
      <StyledSlider {...sliderSettings}>
        {images.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Фото ${index + 1}`} />
          </div>
        ))}
      </StyledSlider>
      <Price>12 000 ₽</Price>
      <Description>
        Удобный и стильный диван для вашей гостиной. Современный дизайн в сочетании с комфортной посадкой делает этот диван идеальным решением для отдыха. Обивка из мягкой ткани устойчива к износу, а каркас выполнен из прочного массива дерева.
      </Description>
    </Page>
  );
};

export default ProductPage;
