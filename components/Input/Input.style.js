import tw, { styled } from 'twin.macro';

export const Field = styled.div`
  ${tw`
    flex
    w-full
  `}


  form{
    ${tw`
      flex
      flex-wrap
      w-full
    `}
  }

  input {
    ${tw`
      px-3
      py-5
      w-full
      text-xl
      font-bold
      text-gray-3
    `}

    &::placeholder {
      ${tw`
        text-gray-2
      `}
    }
  }
`;
