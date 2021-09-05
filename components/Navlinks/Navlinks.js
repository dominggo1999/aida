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

const Navlinks = () => {
  return (
    <>
      <MenuButton>
        <SearchIcon>
          <BiSearchAlt2 />
        </SearchIcon>
        <Button>
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
          <Button>
            Subscribe
          </Button>
        </NavlinksWrapper>
      </NavlinksFlex>
    </>
  );
};

export default Navlinks;
