import React from 'react';
import { Link } from 'gatsby';

import { Logo } from 'assets/Logos';
import { useScrollDirection } from 'hooks/useScrollDirection';

import HamburgerMenu from './HamburgerMenu';
import { NavbarContainer, NavbarLogo } from './styled';

const MobileNav = () => {
  const scrollDirection = useScrollDirection();

  return (
    <NavbarContainer className={scrollDirection === 'down' ? 'hide' : 'show'}>
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
