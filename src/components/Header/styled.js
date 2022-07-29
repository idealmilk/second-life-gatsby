import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  background-color: transparent;
  z-index: 500;
  width: 100%;
  border: 0px solid transparent;
  transition: background-color 0.3s ease-in, border 0.3s ease-in;
  @media (max-width: ${(props) => props.theme.breakpoints.tabletLan}) {
    display: none;
  }
`;

export const InnerWrap = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1400px;
  width: 92%;
  margin: 0 auto;
  padding: 30px 0;
`;

export const LogoWrap = styled.div`
  transform: translateY(4px);
  img {
    width: 170px;
    margin-right: 60px;
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
  }

  .hide-solutions,
  .hide-resources {
    -webkit-animation: fadeinout 0.3s linear forwards;
    animation: fadeinout 0.3s linear forwards;
    visibility: hidden;
  }

  @-webkit-keyframes fadeinout {
    0% {
      opacity: 0.6;
      transform: translateY(76px);
    }
    50% {
      opacity: 0.2;
    }
    99% {
      transform: translateY(76px);
    }
    100% {
      opacity: 0;
      transform: translateY(-476px);
    }
  }

  @keyframes fadeinout {
    0% {
      opacity: 0.6;
      transform: translateY(76px);
    }
    50% {
      opacity: 0.2;
    }
    99% {
      transform: translateY(76px);
    }
    100% {
      opacity: 0;
      transform: translateY(-476px);
    }
  }

  .show-solutions,
  .show-resources {
    -webkit-animation: display 0.5s linear forwards;
    animation: display 0.5s linear forwards;
    visibility: visible;
  }

  @-webkit-keyframes display {
    0% {
      opacity: 0.2;
      transform: translateY(76px);
    }
    50% {
      opacity: 0.6;
      transform: translateY(76px);
    }
    100% {
      opacity: 1;
      transform: translateY(76px);
    }
  }

  @keyframes display {
    0% {
      opacity: 0.2;
      transform: translateY(76px);
    }
    50% {
      opacity: 0.6;
      transform: translateY(76px);
    }
    100% {
      opacity: 1;
      transform: translateY(76px);
    }
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  button:first-of-type {
    margin-right: 8px;
  }
`;

export const SubMenuContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 60px 0;
  background-color: white;
  transition: visibility 0.5s linear, opacity 0.5s ease-out,
    transform 0.3s linear;
`;

export const SubMenuList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1300px;
  margin: 0 auto;
`;

export const SolutionsItemContainer = styled.div`
  display: flex;
  width: 420px;
  padding: 40px 20px;
  font-size: 15px;
  line-height: 1.6;
  color: rgb(129, 134, 140);
  border: 1px solid rgb(231, 232, 233);
  border-radius: 20px;
  transition: background-color 0.5s ease-out;
  p {
    margin-left: 20px;
  }
  span {
    font-size: 20px;
    color: black;
    margin-left: 0;
    transform: none;
  }
  &:hover {
    background-color: ${(props) => props.hoverColor};
    p {
      color: white;
    }
    span {
      color: white;
    }
    img {
      display: none;
      &:last-of-type {
        display: block;
      }
    }
  }
`;

export const SolutionsImageWrap = styled.div`
  display: flex;
  flex-direction: column
  height: 100%;
  margin: auto 20px auto 0;

  img {
    min-height: 60px;
    height: 60px;
    min-width: 60px;
    width: 60px;
    &:last-of-type {
      display: none;
    }
  }
`;

export const ResourcesItemContainer = styled.div`
  display: flex;
  width: 420px;
  padding: 30px 20px;
  font-size: 15px;
  line-height: 1.6;
  color: rgb(129, 134, 140);
  border: 1px solid rgb(231, 232, 233);
  border-radius: 20px;
  transition: background-color 0.5s ease-out;
  span {
    font-size: 20px;
    color: black;
    margin-left: 0;
    transform: none;
  }
  &:hover {
    border: 1px solid white;
    background-color: ${(props) => props.theme.colors.lightOrange};
    img {
      filter: none;
    }
  }
`;

export const ResourcesImageWrap = styled.div`
  display: flex;
  flex-direction: column
  height: 100%;
  margin: auto 0;

  img {
    filter: grayscale(1);
    min-width: 45px;
    width: 45px;
    margin-right: 30px;
  }
`;
