import styled from 'styled-components';

export const Container = styled.footer`
  position: relative;
  background-color: ${(props) => props.theme.colors.blue};
  width: 100%;
  margin-top: 2rem;
  padding-top: 6rem;
`;

export const FormWrap = styled.div`
  width: 45%;
  margin-bottom: 10rem;
  h3 {
    width: 48%;
    color: white;
    margin-bottom: 2rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    width: 100%;
    h3 {
      width: 100%;
      margin: 0 auto 2rem;
      text-align: center;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    display: block;
  }
`;

export const Pages = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: ${(props) => props.theme.breakpoints.tabletLan}) {
    width: 100%;
  }
`;

export const PagesWrap = styled.div`
  display: flex;
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    justify-content: space-between;
    margin-bottom: 60px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    justify-content: revert;
    flex-wrap: wrap;
    width: 80%;
    margin: 0 auto 60px;
  }
`;

export const PageList = styled.ul`
  margin-right: 120px;
  &:last-of-type {
    margin: 0;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletLan}) {
    margin-right: 0;
    margin-bottom: 30px;
    width: 50%;
    text-align: center;
  }
`;

export const PageItem = styled.li`
  margin-bottom: 10px;
  font-size: 1.4rem;
  color: white;
  a {
    font-size: 1.4rem;
    color: white;
    opacity: 0.5;
    transition: opacity 0.2s ease-in-out;
    &:hover {
      opacity: 1;
    }
  }
`;

export const LogoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
  img {
    width: 200px;
    color: white;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    text-align: center;
    display: block;
  }
`;

export const SocialsWrap = styled.div`
  display: flex;
  transform: translateY(3rem);
  a {
    margin-right: 1.8rem;
    &:last-of-type {
      margin-right: 0;
    }
    svg {
      background: none;
      font-size: 2.4rem;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    width: 20%;
    justify-content: space-between;
    margin: 2rem auto 0;
    transform: none;
    a {
      margin: 0;
    }
  }
`;

export const SmallPrint = styled.div`
  display: block;
  width: 100%;
  padding: 1rem;
  border-top: 1px solid white;
  text-align: center;
  opacity: 0.9;
  p {
    color: white;
    font-size: 1.2rem;
  }
`;

export const InnerWrap = styled.div`
  width: 600px;
  max-width: 70%;
  margin: auto;
  text-align: center;
  h2 {
    margin-bottom: 50px;
  }

  svg {
    background: none;
    font-size: 1.4rem;
    transform: translate(-14px, 2px);
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    h2 {
      margin-bottom: 10px;
    }
  }
`;
