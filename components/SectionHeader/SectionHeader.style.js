import tw, { styled } from 'twin.macro';

export const HeaderWrapper = styled.div`
  ${tw`
    flex 
    w-full
    mt-5
    mb-16
    md:mb-5
  `}
`;

export const HeaderTitle = styled.h2`
  ${tw`
    font-poppins 
    text-4xl
    font-semibold 
  `}
`;
