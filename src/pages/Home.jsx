import Header from '../components/Header'
import Hero from '../components/Hero'
import ImageSlider from '../components/ImageSlider'
import Footer from '../components/Footer'
import Middle from '../components/Middle'
import { useEffect, setMessage } from 'react';
import axios from 'axios';
import CategoryCard from '../components/CategoryCard'
import Zagolovok from '../components/Zagolovok'
import Product from '../components/Product'
import wardrobe from '../assets/images/ГАРДЕРОБНЫЕ.jpg'
import childroom from "../assets/images/ДЕТСКИЕ.jpg"
import kitchen from "../assets/images/КУХНИ.jpg"
import forMarket from "../assets/images/ДЛЯ_МАГАЗИНА.jpg"
import closet from "../assets/images/ШКАФЫ.jpg"
import hallway from "../assets/images/ПРИХОЖИЕ.jpg"
import IconCard from '../components/IconCard' 
import first from '../assets/images/1.webp'
import second from '../assets/images/2.webp'
import third from '../assets/images/3.webp'
import fourth from '../assets/images/4.webp'
import fifth from '../assets/images/5.webp'
import Testimonial from '../components/Testimonial'
import ConsultationForm from '../components/ConsultationForm'

const iconCardsProps = [
  { title: "КОРОТКИЕ СРОКИ", image: first, text: "Вообше быстро делаем как папа карло" },
  { title: "ДОСТУПНЫЕ ЦЕНЫ", image: second, text: "Вообше быстро делаем как папа карло" },
  { title: "БЕСПЛАТНЫЙ ПРОЕКТ НА РУКИ", image: third, text: "Вообше быстро делаем как папа карло" },
  { title: "КОМАНДА ПРОФЕССИОНАЛОВ", image: fourth, text: "Вообше быстро делаем как папа карло" },
  { title: "ПОЛНЫЙ ЦИКЛ ПРОИЗВОДСТВА", image: fifth, text: "Вообше быстро делаем как папа карло" }
];

const categories = [
  { title: 'КУХНИ', image: kitchen },
  { title: 'ДЕТСКИЕ', image: childroom },
  { title: 'ГАРДЕРОБ', image: wardrobe },
  { title: 'ДЛЯ МАГАЗИНА', image: forMarket },
  { title: 'ШКАФЫ', image: closet },
  { title: 'ПРИХОЖИЕ', image: hallway },
];

function App() {
    useEffect(() => {
    axios.get("http://localhost:8000/")
        .then(response => setMessage(response.data.message))
        .catch(error => console.error("Ошибка:", error));
}, []);
  return (
    <div className="app-container">
      <main>
        <Hero />
        <ImageSlider />
        <Middle />
        <div className="page-container">
          <div className="category-container">
            {categories.map((category, index) => (
            <CategoryCard key={index} title={category.title} image={category.image} />
          ))}
        </div>
        </div>
        <Zagolovok />
        <Product />
        <div className="page-container">
          <div className="container">
            {iconCardsProps.map((card, index) => (
              <IconCard key={index} title={card.title} text={card.text} image={card.image} />
            ))}
          </div>
        </div>
        <Testimonial />
        <ConsultationForm />
      </main>
    </div>
  )
}

export default App