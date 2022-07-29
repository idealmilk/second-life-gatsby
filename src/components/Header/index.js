import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';

import { SciLeads } from 'assets/Logos';
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

  const changeNavBar = () => {
    if (window.scrollY >= 50) {
      setNavBar(true);
    } else {
      setNavBar(false);
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
            <img src={SciLeads} alt='SciLeads' />
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
                color: activeNavItem === 'About' ? 'rgb(246,95,48)' : 'black',
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
                  activeNavItem === 'Services' ? 'rgb(246,95,48)' : 'black',
              }}
            >
              Services
            </Link>
          </NavItem>
          <NavItem
            onMouseEnter={() => setActiveNavItem('Blog')}
            onMouseLeave={() => setActiveNavItem('')}
          >
            <Link
              to='/blog'
              style={{
                color: activeNavItem === 'Blog' ? 'rgb(246,95,48)' : 'black',
              }}
            >
              Blog
            </Link>
          </NavItem>
          <NavItem
            onMouseEnter={() => setActiveNavItem('FAQs')}
            onMouseLeave={() => setActiveNavItem('')}
          >
            <Link
              to='/faqs'
              style={{
                color: activeNavItem === 'FAQs' ? 'rgb(246,95,48)' : 'black',
              }}
            >
              FAQs
            </Link>
          </NavItem>
        </NavList>
        <ButtonWrap>
          <a href='https://portal.scileads.com'>
            <Button color='blue'>Book Free Assessment</Button>
          </a>
        </ButtonWrap>
      </InnerWrap>
    </Container>
  );
};

export default Header;
