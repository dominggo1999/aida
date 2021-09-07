import Link from 'next/link';
import { BiSearchAlt2 } from 'react-icons/bi';
import {
  NavlinksFlex,
  NavlinksWrapper,
  NavItemLeft,
  MenuButton,
  SearchIcon,
} from './Navlink.style';
import navlinks from '../../constants/navlinks';
import Button from '../Button/Button';

const Navlinks = ({ openSideNavbar }) => {
  return (
    <>
      <MenuButton>
        <SearchIcon>
          <BiSearchAlt2 />
        </SearchIcon>
        <Button
          nav
          onClick={openSideNavbar}
        >
          Menu
        </Button>
      </MenuButton>
      <NavlinksFlex>
        <NavlinksWrapper>
          {
            navlinks.map((item) => (
              <Link
                key={item.id}
                href={item.path}
              >
                <NavItemLeft>{item.name}</NavItemLeft>
              </Link>
            ))
          }
        </NavlinksWrapper>
        <NavlinksWrapper>
          <SearchIcon>
            <BiSearchAlt2 />
          </SearchIcon>
          <Button nav>
            Subscribe
          </Button>
        </NavlinksWrapper>
      </NavlinksFlex>
    </>
  );
};

export default Navlinks;
