import tw, { styled } from 'twin.macro';

export const NavButton = styled.button(({ dark, primary, white }) => {
  return [
    tw`
      text-lg 
      font-sans-pro 
      px-4 py-2 
      rounded-lg
      focus:outline-none
      transition-colors 
      ease-in-out
      duration-100
    bg-black 
    text-white 
    hover:bg-brand-1 
    hover:text-black
    `,
    primary && tw`
    bg-brand-1 
    text-black 
    hover:bg-gray-3 
    hover:text-white`,
    white && tw`
    bg-white
    text-black 
    hover:bg-gray-3 
    hover:text-white`,
  ];
});

export const Btn = styled(NavButton)`
  ${tw`
    
  `}
`;
