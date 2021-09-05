import Link from 'next/link';
import { CgClose } from 'react-icons/cg';
import { SideNavbarWrapper, NavItem, CloseButton } from './SideNavbar.style';
import navlinks from '../../constants/navlinks';
import Button from '../Button/Button';

const SideNavbar = ({ open, handleClose }) => {
  return (
    <SideNavbarWrapper open={open}>
      <CloseButton onClick={handleClose}>
        <CgClose />
      </CloseButton>
      {
        navlinks.map((item) => (
          <Link
            key={item.id}
            href={item.path}
          >
            <NavItem onClick={handleClose}>{item.name}</NavItem>
          </Link>
        ))
      }
      <Button white>
        Subscribe
      </Button>
    </SideNavbarWrapper>
  );
};

export default SideNavbar;
