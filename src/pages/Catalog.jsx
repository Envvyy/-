import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Локальные изображения
import sofaImage from '../assets/images/КУХНИ.jpg';
import chairImage from '../assets/images/ПРИХОЖИЕ.jpg';
import tableImage from '../assets/images/ШКАФЫ.jpg';

// Цвета
const COLORS = {
  background: '#282e3a',
  text: '#dddddd',
  accent: '#c0b78e',
};

// Тестовые данные для демонстрации
const TEST_PRODUCTS = [
  {
    id: 1,
    name: 'Диван Madrid',
    description: 'Удобный и стильный диван для вашей гостиной.',
    price: 12000,
    image: sofaImage,
  },
  {
    id: 2,
    name: 'Стул Oslo',
    description: 'Элегантный стул из прочного дерева.',
    price: 3500,
    image: chairImage,
  },
  {
    id: 3,
    name: 'Стол London',
    description: 'Прочный обеденный стол для всей семьи.',
    price: 7800,
    image: tableImage,
  },
];

// Контейнер страницы каталога
const CatalogContainer = styled.div`
  background: ${COLORS.background};
  min-height: 100vh;
  padding: 2rem;
`;

// Сетка карточек
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
`;

// Одиночная карточка товара
const Card = styled(motion.div)`
  background: ${COLORS.background};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: ${COLORS.text};
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  margin: 0 0 0.5rem;
  color: ${COLORS.accent};
`;

const Description = styled.p`
  font-size: 0.9rem;
  flex: 1;
  margin-bottom: 1rem;
`;

const Price = styled.span`
  font-weight: bold;
  font-size: 1rem;
  color: ${COLORS.accent};
`;

// Компонент карточки каталога
const CatalogCard = ({ product }) => (
  <Card
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.3 }}
  >
    <Image src={product.image} alt={product.name} />
    <Content>
      <Title>{product.name}</Title>
      <Description>{product.description}</Description>
      <Price>{product.price} ₽</Price>
    </Content>
  </Card>
);

// Страница каталога
export default function CatalogPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Заменяем вызов API тестовыми данными
    setTimeout(() => {
      setProducts(TEST_PRODUCTS);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <CatalogContainer>
        <p style={{ color: COLORS.text }}>Загрузка каталога...</p>
      </CatalogContainer>
    );
  }

  return (
    <CatalogContainer>
      <Grid>
        {products.map((product) => (
          <CatalogCard key={product.id} product={product} />
        ))}
      </Grid>
    </CatalogContainer>
  );
}
