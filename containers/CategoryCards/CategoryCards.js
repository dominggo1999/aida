import { useEffect, useRef, useState } from 'react';
// short-uuid just for ui testing before connected to the real database
import short from 'short-uuid';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import { categories } from '../../data/categories';
import Container from '../../components/Wrapper/Container';
import { CategoryCardsWrapper, CardsCarousel } from './CategoryCards.style';
import { breakpoints } from '../../constants/tailwindBreakpoint';

// Install swiper plugin
// Import Swiper styles
import 'swiper/swiper-bundle.css';

const CategoryCards = () => {
  return (
    <CategoryCardsWrapper>
      <Container>
        <CardsCarousel>
          <Swiper
            loop
            slidesPerView="auto"
            style={{
              width: '100%',
              position: 'relative',
              overflow: 'visible',
            }}
            spaceBetween={20}
          >
            {
              categories && categories.map((category) => {
                return (
                  <SwiperSlide
                    style={{
                      width: 'auto',
                    }}
                    key={short.generate()}
                  >
                    <Link href={`/category/${category.category}`}>
                      <a>
                        <CategoryCard
                          category={category}
                        />
                      </a>
                    </Link>
                  </SwiperSlide>
                );
              })
            }
          </Swiper>
        </CardsCarousel>
      </Container>
    </CategoryCardsWrapper>
  );
};

export default CategoryCards;
