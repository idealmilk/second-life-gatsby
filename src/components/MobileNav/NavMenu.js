import React from 'react';
import { Link } from 'gatsby';
import { useLocation } from '@reach/router';

import CollapsibleListItem from './CollapsibleListItem';
import { NavMenuContainer, NavList, NavLink } from './styled';

const variants = {
  show: {
    transform: 'translateX(0em)',
    opacity: 1,
  },
  hide: {
    transform: 'translateX(5em)',
    opacity: 0,
  },
};

const solutionsMenu = [
  {
    title: 'Sales',
    slug: '/solutions/sales',
  },
  {
    title: 'Marketing',
    slug: '/solutions/marketing',
  },
  {
    title: 'Startups',
    slug: '/solutions/startups',
  },
];

const resourcesMenu = [
  {
    title: 'News & Blog',
    slug: '/news',
  },
  {
    title: 'Partners',
    slug: '/partner-program',
  },
  {
    title: 'Referral',
    slug: '/refer-a-friend-to-scileads',
  },
];

export function NavMenu({ isOpen }) {
  const location = useLocation();

  return (
    <NavMenuContainer>
      <NavList>
        <NavLink
          initial={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.5, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.15, duration: 0.05 },
            },
          }}
        >
          <CollapsibleListItem parent='Solutions' children={solutionsMenu} />
        </NavLink>

        <NavLink
          initial={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.5, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.15, duration: 0.05 },
            },
          }}
        >
          <Link
            to='/pricing'
            style={{
              color:
                location.pathname === '/pricing'
                  ? 'rgba(246, 95, 48, 1)'
                  : 'black',
            }}
          >
            Pricing
          </Link>
        </NavLink>

        <NavLink
          initial={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.5, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.15, duration: 0.05 },
            },
          }}
        >
          <Link
            to='/events'
            style={{
              color:
                location.pathname === '/events'
                  ? 'rgba(246, 95, 48, 1)'
                  : 'black',
            }}
          >
            Events
          </Link>
        </NavLink>

        <NavLink
          initial={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.5, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.15, duration: 0.05 },
            },
          }}
        >
          <Link
            to='/about-us'
            style={{
              color:
                location.pathname === '/about-us'
                  ? 'rgba(246, 95, 48, 1)'
                  : 'black',
            }}
          >
            About Us
          </Link>
        </NavLink>

        <NavLink
          initial={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.5, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.15, duration: 0.05 },
            },
          }}
        >
          <CollapsibleListItem parent='Resources' children={resourcesMenu} />
        </NavLink>

        <NavLink
          initial={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.5, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.15, duration: 0.05 },
            },
          }}
        >
          <Link
            to='/careers'
            style={{
              color:
                location.pathname === '/careers'
                  ? 'rgba(246, 95, 48, 1)'
                  : 'black',
            }}
          >
            Careers
          </Link>
        </NavLink>
      </NavList>
    </NavMenuContainer>
  );
}

export default NavMenu;
