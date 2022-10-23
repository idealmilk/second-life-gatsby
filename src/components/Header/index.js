import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { IoIosArrowDown } from 'react-icons/io';

import { Logo, LogoWhite } from 'assets/Logos';
import { Button } from 'components/common/Buttons';

import ServicesItem from './ServicesItem';

import {
  Container,
  InnerWrap,
  LogoWrap,
  NavList,
  NavItem,
  ButtonWrap,
  SubMenuContainer,
  SubMenuList,
} from './styled';

const Header = () => {
  const [activeNavItem, setActiveNavItem] = useState('');
  const [navBar, setNavBar] = useState(false);
  const [whiteLogoOpacity, setWhiteLogoOpacity] = useState(1);
  const [blackLogoOpacity, setBlackLogoOpacity] = useState(10);
  const [itemColor, setItemColor] = useState('white');
  const [servicesItemColor, setServicesItemColor] = useState('white');

  let servicesActive = activeNavItem === 'Services';

  const services = [
    {
      title: 'Financial Planning',
      subtitle: 'Everyone should have a financial plan',
      // image: News,
      slug: '/services/financial-planning',
    },
    {
      title: 'Retirement Planning',
      subtitle: 'Leaving paid employment is a major life change',
      // image: Partners,
      slug: '/services/retirement-planning',
    },
    {
      title: 'Coaching & mentoring',
      subtitle: 'Wealth management made easy',
      // image: Referral,
      slug: '/services/coaching-and-mentoring',
    },
  ];

  const changeNavBar = () => {
    if (window.scrollY >= 200) {
      setNavBar(true);
      setWhiteLogoOpacity(0);
      setBlackLogoOpacity(1);
      setServicesItemColor('black');
    } else {
      setNavBar(false);
      setWhiteLogoOpacity(1);
      setBlackLogoOpacity(0);
      setServicesItemColor('white');
    }
  };

  useEffect(() => {
    changeNavBar();
    window.addEventListener('scroll', changeNavBar);
  });

  useEffect(() => {
    if (servicesActive) {
      setItemColor('black');
      setServicesItemColor('rgb(246,95,48)');
    } else {
      setItemColor('white');
      setServicesItemColor('black');
    }
  }, [servicesActive]);

  return (
    <Container
      className={navBar && 'active'}
      style={{
        backgroundColor: servicesActive ? 'white' : 'transparent',
      }}
    >
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
                color: activeNavItem === 'About' ? 'rgb(246,95,48)' : itemColor,
              }}
            >
              About
            </Link>
          </NavItem>

          <NavItem
            style={{
              color: servicesItemColor,
            }}
            onMouseEnter={() => setActiveNavItem('Services')}
            onMouseLeave={() => setActiveNavItem('')}
          >
            Services
            <span>
              <IoIosArrowDown />
            </span>
            <SubMenuContainer
              className={servicesActive ? 'show-services' : 'hide-services'}
            >
              <SubMenuList>
                {services.map((item, pos) => {
                  return <ServicesItem {...item} key={pos} services={true} />;
                })}
              </SubMenuList>
            </SubMenuContainer>
          </NavItem>

          <NavItem
            onMouseEnter={() => setActiveNavItem('Pricing')}
            onMouseLeave={() => setActiveNavItem('')}
          >
            <Link
              to='/pricing'
              style={{
                color:
                  activeNavItem === 'Pricing' ? 'rgb(246,95,48)' : itemColor,
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
                color: activeNavItem === 'Blog' ? 'rgb(246,95,48)' : itemColor,
              }}
            >
              Blog
            </Link>
          </NavItem>
        </NavList>
        <ButtonWrap>
          <Button color='blue'>Book consultation</Button>
        </ButtonWrap>
      </InnerWrap>
    </Container>
  );
};

export default Header;
