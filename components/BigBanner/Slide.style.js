import tw, { styled } from 'twin.macro';

// Satu slide carousel nya
export const BannerSlide = styled.div`
  ${tw`
    flex
    flex-wrap
    w-full 
    select-none
`}

  min-height: 520px;
`;

export const Half = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    lg:w-1/2
    justify-center
    pb-10
    lg:pb-0
  `}
  
  &:first-child{
    ${tw`lg:pr-2`}
  }
  &:last-child{
    ${tw`lg:pl-2 pb-20 bg-white`}
  }
`;

export const ImageContainer = styled.div`
  ${tw`
    relative
    w-full
    overflow-hidden
    rounded-3xl
  `}

  height: 90%;
  min-height: 400px;
`;

export const ContentTop = styled.div`
  ${tw`
    flex 
    items-center
  `}
`;

export const ContentDate = styled.p`
  ${tw`
    text-gray-2 ml-2
  `}
`;

export const ContentTitle = styled.h1`
  ${tw`
    font-bold
    pt-4
    pb-6
    leading-tight
    lg:text-5xl
    text-4xl
  `}
`;

export const Description = styled.p`
  ${tw`
    text-lg text-gray-3
    mb-3
  `}
`;

export const Time = styled.p`
  ${tw`
    font-bold text-gray-2
  `}
`;