import tw, { styled } from 'twin.macro';

export const SubscribeNewsLetterWrapper = styled.div`
  ${tw`
    w-full 
    flex 
    my-10
    bg-brand-1
    justify-center
  `}
`;

export const Content = styled.div`
  ${tw`
    py-24
  `}
`;

export const ContentTop = styled.div`
  ${tw`
    mb-16
  `}
`;

export const ContentBottom = styled.div`
  ${tw`
    flex
  `}

  input {
    ${tw`
      mr-5
      shadow-button
      rounded-2xl
      outline-none
      mb-5
      md:mb-0
    `}

    max-width: 500px;
  }

  button {
    ${tw`
      h-1/2
      md:h-full
      text-2xl
      rounded-2xl
      shadow-button
    `}
  
    &:hover {
      ${tw`
        bg-brand-2
      `}
    }
  }
`;

export const SubscribeText = styled.h4`
  ${tw`
    flex 
    items-center
    font-sans-pro
    text-3xl
    font-bold
    text-gray-3
  `}

  svg{
    ${tw`
      mr-1
    `}
  }
`;

export const NewsletterText = styled.h3`
  ${tw`
    text-4xl
    font-poppins
    font-semibold
  `}
`;
