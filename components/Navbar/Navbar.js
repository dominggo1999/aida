import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Container from '../Wrapper/Container';
import {
  NavbarWrapper, NavLogo, NavbarFlex,
} from './Navbar.style';
import Navlinks from '../Navlinks/Navlinks';
import Backdrop from '../Backdrop/Backdrop';
import SideNavbar from '../SideNavbar/SideNavbar';
import tailwindBreakpoints from '../../constants/tailwindBreakpoint';

const Navbar = () => {
  const [showSideNavbar, setShowSideNavbar] = useState(false);

  const openSideNavbar = () => {
    setShowSideNavbar(true);
  };

  const closeSideNavbar = () => {
    setShowSideNavbar(false);
  };

  useEffect(() => {
    const closeSidebarOnLargeScreen = (e) => {
      if(window.innerWidth >= tailwindBreakpoints.sm) {
        closeSideNavbar();
      }
    };

    window.addEventListener('resize', closeSidebarOnLargeScreen);

    return () => {
      window.removeEventListener('resize', closeSidebarOnLargeScreen);
    };
  }, []);

  return (
    <NavbarWrapper>
      <Container>
        <NavbarFlex>
          <Link href="/">
            <NavLogo>
              aida.
            </NavLogo>
          </Link>
          <Navlinks openSideNavbar={openSideNavbar} />

          {/* Backdrop and sidebar only shown if showSideNavbar is true */}
          {showSideNavbar && (
            <Backdrop
              handleClose={closeSideNavbar}
              open={showSideNavbar}
            />
          )}
          <SideNavbar
            handleClose={closeSideNavbar}
            open={showSideNavbar}
          />
        </NavbarFlex>
      </Container>
    </NavbarWrapper>
  );
};

export default Navbar;
