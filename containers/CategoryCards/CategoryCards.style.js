import tw, { styled } from 'twin.macro';

import { SwiperSlide } from 'swiper/react';

export const CategoryCardsWrapper = styled.div`
  ${tw`
    flex w-full 
    items-center
    justify-center
    py-8
    overflow-hidden
    mx-auto
  `}

  max-width: 1700px;
`;

export const CardsCarousel = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
  `}
`;
