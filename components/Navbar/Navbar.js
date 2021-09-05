import Link from 'next/link';
import Container from '../Wrapper/Container';
import {
  NavbarWrapper, NavLogo, NavbarFlex,
} from './Navbar.style';
import Navlinks from '../Navlinks/Navlinks';
import Button from '../Button/Button';

const Navbar = () => {
  return (
    <NavbarWrapper>
      <Container>
        <NavbarFlex>
          <Link href="/">
            <NavLogo>
              aida.
            </NavLogo>
          </Link>
          <Navlinks />
        </NavbarFlex>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
