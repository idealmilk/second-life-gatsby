import React from 'react';
import { Link } from 'gatsby';

import Logo from 'assets/Logos/logo.svg';

import HamburgerMenu from './HamburgerMenu';
import { NavbarContainer, NavbarLogo } from './styled';

const MobileNav = () => {
  return (
    <NavbarContainer>
      <NavbarLogo>
        <Link to='/'>
          <img src={Logo} alt='SciLeads Logo' />
        </Link>
      </NavbarLogo>
      <HamburgerMenu logo={Logo} />
    </NavbarContainer>
  );
};

export default MobileNav;
