import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import { Logo, LogoWhite } from 'assets/Logos';
import { Button } from 'components/common/Buttons';

import {
  Container,
  InnerWrap,
  LogoWrap,
  NavList,
  NavItem,
  ButtonWrap,
} from './styled';

const Header = () => {
  const [activeNavItem, setActiveNavItem] = useState('');
  const [navBar, setNavBar] = useState(false);
  const [whiteLogoOpacity, setWhiteLogoOpacity] = useState(1);
  const [blackLogoOpacity, setBlackLogoOpacity] = useState(10);

  const changeNavBar = () => {
    if (window.scrollY >= 200) {
      setNavBar(true);
      setWhiteLogoOpacity(0);
      setBlackLogoOpacity(1);
    } else {
      setNavBar(false);
      setWhiteLogoOpacity(1);
      setBlackLogoOpacity(0);
    }
  };

  useEffect(() => {
    changeNavBar();
    window.addEventListener('scroll', changeNavBar);
  });

  return (
    <Container className={navBar && 'active'}>
      <InnerWrap>
        <LogoWrap>
          <Link to='/'>
            <img
              src={LogoWhite}
              alt='Second Life'
              style={{ opacity: whiteLogoOpacity }}
            />
          </Link>
          <Link to='/'>
            <img
              src={Logo}
              alt='Second Life'
              style={{ opacity: blackLogoOpacity }}
              class='black-logo'
            />
          </Link>
        </LogoWrap>

        <NavList>
          <NavItem
            onMouseEnter={() => setActiveNavItem('About')}
            onMouseLeave={() => setActiveNavItem('')}
          >
            <Link
              to='/about'
              style={{
                color: activeNavItem === 'About' ? 'rgb(246,95,48)' : 'white',
              }}
            >
              About
            </Link>
          </NavItem>

          <NavItem
            onMouseEnter={() => setActiveNavItem('Services')}
            onMouseLeave={() => setActiveNavItem('')}
          >
            <Link
              to='/services'
              style={{
                color:
                  activeNavItem === 'Services' ? 'rgb(246,95,48)' : 'white',
              }}
            >
              Services
            </Link>
          </NavItem>

          <NavItem
            onMouseEnter={() => setActiveNavItem('Pricing')}
            onMouseLeave={() => setActiveNavItem('')}
          >
            <Link
              to='/pricing'
              style={{
                color: activeNavItem === 'Pricing' ? 'rgb(246,95,48)' : 'white',
              }}
            >
              Pricing
            </Link>
          </NavItem>

          <NavItem
            onMouseEnter={() => setActiveNavItem('Blog')}
            onMouseLeave={() => setActiveNavItem('')}
          >
            <Link
              to='/blog'
              style={{
                color: activeNavItem === 'Blog' ? 'rgb(246,95,48)' : 'white',
              }}
            >
              Blog
            </Link>
          </NavItem>
          <ButtonWrap>
            <Button clickOrigin='Header'>
              <a
                href='https://www.surveymonkey.co.uk/r/NHNTQ9T'
                target='_blank'
                rel='noreferrer'
                aria-label='Twitter'
              >
                Book consultation
              </a>
            </Button>
          </ButtonWrap>
        </NavList>
      </InnerWrap>
    </Container>
  );
};

export default Header;
