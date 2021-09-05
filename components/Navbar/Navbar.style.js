import tw, { styled } from 'twin.macro';

export const NavbarWrapper = styled.div`
  ${tw`
    flex
    w-full
    py-5
    justify-center
    fixed
  `}
`;

export const NavLogo = styled.a`
  ${tw`
    text-3xl
    md:text-4xl
    font-poppins
    font-bold
    mr-20
    cursor-pointer
  `}
`;

export const NavbarFlex = styled.div`
  ${tw`
    flex
    items-center
    justify-between
  `}
`;
