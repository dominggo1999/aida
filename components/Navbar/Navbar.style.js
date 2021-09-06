import tw, { styled } from 'twin.macro';

export const NavbarWrapper = styled.div`
  ${tw`
    flex
    w-full
    py-5
    justify-center
    fixed
    top-0
    left-0
  `}

  transform: ${(props) => (props.showNavbar ? 'translateY(0)' : 'translateY(-100%)')};
  transition : transform ease 300ms;
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
