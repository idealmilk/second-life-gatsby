import React from 'react';
import { Link } from 'gatsby';

import { LogoWhite } from 'assets/Logos';

import HamburgerMenu from './HamburgerMenu';
import { NavbarContainer, NavbarLogo } from './styled';

const MobileNav = () => {
  return (
    <NavbarContainer>
      <NavbarLogo>
        <Link to='/'>
          <img src={LogoWhite} alt='Second life' />
        </Link>
      </NavbarLogo>
      <HamburgerMenu logo={LogoWhite} />
    </NavbarContainer>
  );
};

export default MobileNav;
