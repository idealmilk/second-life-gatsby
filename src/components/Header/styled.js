import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  background-color: transparent;
  z-index: 500;
  width: 100%;
  border: 0px solid transparent;

  transition: 0.3s ease-in, border 0.3s ease-in;
  a {
    transition: color 0.3s ease-in, border 0.3s ease-in;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletLan}) {
    display: none;
  }
`;

export const InnerWrap = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1300px;
  width: 90%;
  margin: 0 auto;
  padding: 30px 0;
`;

export const LogoWrap = styled.div`
  transform: translateY(4px);
  img {
    width: 170px;
    margin-right: 60px;
  }
  .black-logo {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const NavList = styled.div`
  display: flex;
  font-size: 16px;
  letter-spacing: 0.5px;
  font-style: none;
`;

export const NavItem = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 20px;
  align-items: center;
  cursor: pointer;
  font-size: 1.6rem;
  svg {
    font-size: 1.1rem;
    background: transparent;
    margin-left: 6px;
  }
  &:first-of-type {
    padding-left: 0;
  }
  &:last-of-type {
    padding-right: 0;
  }
  a {
    font-size: 1.6rem;
    display: block;
    &:hover {
      color: ${(props) => props.theme.colors.orange} !important;
    }
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  margin-left: 2rem;
`;
