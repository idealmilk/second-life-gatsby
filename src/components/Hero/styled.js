import styled from 'styled-components';

import { TightInnerWrap } from 'components/common/Containers/styled';

import Hero from 'assets/hero.jpg';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${Hero});
  background-repeat: no-repeat;
  background-size: 130% auto;
  background-position: right -40rem top -14rem;
  margin-bottom: 10rem;
  @media (max-width: 1330px) {
    background-size: 150% auto;
    background-position: right -50rem top -14rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletLan}) {
    background-size: 150% auto;
    background-position: right -42rem top -6rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    background-size: 180% auto;
    background-position: right -50rem top -4rem;
  }
  @media (max-width: 700px) {
    background-size: 220% auto;
    background-position: right -38rem top 6rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    background-size: cover;
    background-position: center;
  }
`;

export const InnerWrapStyled = styled(TightInnerWrap)`
  display: flex;
  flex-direction: row;
  height: 100%;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    position: relative;
    height: 100vh;
  }
`;

export const ContentWrap = styled.div`
  margin: auto 0;
  background-color: transparent;
  color: white;
  width: 60%;
  h1,
  p {
    margin: 1rem 0;
    width: 75%;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    position: absolute;
    width: 100%;
    bottom: 10rem;
    margin: 0 auto;
    text-align: center;
    p {
      width: 100%;
      text-align: center;
      margin: 2rem auto 3rem;
    }
    h1 {
      text-align: center;
      width: 90%;
      margin: 0 auto;
    }
  }
`;

export const FormWrap = styled.div`
  width: 75%;
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    margin: 0 auto;
  }
`;
