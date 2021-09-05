import tw, { styled } from 'twin.macro';

const Container = styled.div`
  ${tw`
    flex 
    flex-col 
    w-full
    mx-5
    sm:mx-20
    lg:mx-44
  `}

  max-width: 1200px;
`;

export default Container;
