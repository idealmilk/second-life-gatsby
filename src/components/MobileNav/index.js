import React from 'react';
import { Link } from 'gatsby';

import { Logo } from 'assets/Logos';

import HamburgerMenu from './HamburgerMenu';
import { NavbarContainer, NavbarLogo } from './styled';

const MobileNav = () => {
  return (
    <NavbarContainer>
      <NavbarLogo>
        <Link to='/'>
          <img src={Logo} alt='Second life' />
        </Link>
      </NavbarLogo>
      <HamburgerMenu logo={Logo} />
    </NavbarContainer>
  );
};

export default MobileNav;
