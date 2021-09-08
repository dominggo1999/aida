import tw, { styled } from 'twin.macro';

import { SwiperSlide } from 'swiper/react';

export const CategoryCardsWrapper = styled.div`
  ${tw`
    flex w-full 
    flex-nowrap
    items-center
    justify-center
    overflow-x-hidden
    mx-auto
  `}

  height: 200px;
  max-width: 1700px;
`;

export const CardsCarousel = styled.div`
  ${tw`
    w-full
  `}
`;
