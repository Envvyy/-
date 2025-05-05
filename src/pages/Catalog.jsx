import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import axios from 'axios';

// Стили
const COLORS = {
  background: '#282e3a',
  text: '#dddddd',
  accent: '#c0b78e',
  darkAccent: '#a89d6e'
};

const CatalogContainer = styled.div`
  background: ${COLORS.background};
  min-height: 100vh;
  padding: 2rem;
`;

const CatalogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const CatalogTitle = styled.h1`
  color: ${COLORS.accent};
  margin: 0;
  font-size: 2rem;
`;

const CategoryButtons = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

const CategoryButton = styled.button`
  background: ${props => props.$active ? COLORS.accent : COLORS.background};
  color: ${props => props.$active ? COLORS.background : COLORS.text};
  padding: 0.5rem 1.25rem;
  border: 1px solid ${COLORS.accent};
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.2s;
  font-weight: ${props => props.$active ? '600' : '400'};
  
  &:hover {
    background: ${props => props.$active ? COLORS.accent : COLORS.darkAccent};
    color: ${COLORS.background};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
`;

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
  background: #383e4a;
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

const CatalogCard = ({ product }) => {
  const firstImage = product.images?.[0];
  const imageUrl = firstImage?.url || null;

  return (
    <Card whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
      {imageUrl && (
        <Image 
          src={imageUrl} 
          alt={product.name}
          onError={(e) => {
            e.target.src = '';
            e.target.style.display = 'none';
          }}
        />
      )}
      <Content>
        <Title>{product.name}</Title>
        <Description>{product.characteristic}</Description>
        <Price>{product.price} ₽</Price>
        {product.images?.length > 1 && (
          <small style={{ color: COLORS.accent, marginTop: '0.5rem' }}>
            +{product.images.length - 1} фото
          </small>
        )}
      </Content>
    </Card>
  );
};

export default function CatalogPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get('category') || null;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const params = {};
        if (currentCategory) {
          params.category = currentCategory;
        }
        
        const response = await axios.get('http://localhost:8000/furniture/get', { params });
        setProducts(response.data);
      } catch (err) {
        console.error('Ошибка:', err);
        setError('Не удалось загрузить данные. Пожалуйста, попробуйте позже.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [currentCategory]);

  const handleCategoryChange = (category) => {
    if (category) {
      setSearchParams({ category });
    } else {
      setSearchParams({});
    }
  };

  if (loading) {
    return (
      <CatalogContainer>
        <CatalogHeader>
          <CatalogTitle>Каталог мебели</CatalogTitle>
        </CatalogHeader>
        <p style={{ color: COLORS.text }}>Загрузка...</p>
      </CatalogContainer>
    );
  }

  if (error) {
    return (
      <CatalogContainer>
        <CatalogHeader>
          <CatalogTitle>Каталог мебели</CatalogTitle>
        </CatalogHeader>
        <p style={{ color: '#ff6b6b' }}>{error}</p>
      </CatalogContainer>
    );
  }

  return (
    <CatalogContainer>
      <CatalogHeader>
        <CatalogTitle>Каталог мебели</CatalogTitle>
        <CategoryButtons>
          <CategoryButton 
            onClick={() => handleCategoryChange(null)}
            $active={!currentCategory}
          >
            Все товары
          </CategoryButton>
          <CategoryButton 
            onClick={() => handleCategoryChange('КАТАЛОГ')}
            $active={currentCategory === 'КАТАЛОГ'}
          >
            КАТАЛОГ
          </CategoryButton>
          <CategoryButton 
            onClick={() => handleCategoryChange('КУХНИ')}
            $active={currentCategory === 'КУХНИ'}
          >
            Кухни
          </CategoryButton>
          <CategoryButton 
            onClick={() => handleCategoryChange('ПРИХОЖИЕ')}
            $active={currentCategory === 'ПРИХОЖИЕ'}
          >
            Прихожие
          </CategoryButton>
          <CategoryButton 
            onClick={() => handleCategoryChange('ШКАФЫ')}
            $active={currentCategory === 'ШКАФЫ'}
          >
            Шкафы
          </CategoryButton>
        </CategoryButtons>
      </CatalogHeader>

      {products.length > 0 ? (
        <Grid>
          {products.map((product) => (
            <CatalogCard key={product.id} product={product} />
          ))}
        </Grid>
      ) : (
        <p style={{ color: COLORS.text }}>
          {currentCategory 
            ? `В категории "${currentCategory}" товаров не найдено`
            : 'В каталоге нет товаров'}
        </p>
      )}
    </CatalogContainer>
  );
}