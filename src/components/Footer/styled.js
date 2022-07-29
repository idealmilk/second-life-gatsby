import styled from 'styled-components';

import { FormBackground } from 'assets/Footer';

export const Container = styled.footer`
  position: relative;
  background-color: ${(props) => props.theme.colors.black};
  width: 100%;
  margin-top: 2rem;
`;

export const AwardWrap = styled.div`
  padding: 40px;
  border: solid 1px rgba(39, 48, 56, 1);
  border-radius: 8px;
  @media (max-width: ${(props) => props.theme.breakpoints.tabletLan}) {
    display: none;
  }
`;

export const AwardTagWrap = styled.div`
  min-width: 100%;
  height: 50px;
  p {
    float: right;
    margin: 0;
    padding: 4px 12px;
    color: white;
    border: solid 1px rgba(39, 48, 56, 1);
    border-radius: 20px;
    font-size: 1.2rem;
    letter-spacing: 2.2px;
    text-transform: uppercase;
  }
`;

export const AwardTextWrap = styled.div`
  img {
    width: 100px;
  }
  p {
    margin: 0;
    color: white;
    font-size: 2rem;
    span {
      color: #83b823;
    }
  }
`;

export const AwardImgWrap = styled.div`
  margin-top: 15px;
  img {
    height: 150px;
    &:last-of-type {
      transform: translate(10px, -45px);
      height: 60px;
    }
  }
`;

export const Content = styled.div`
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
  margin-bottom: 20px;
  img {
    width: 200px;
  }
  a {
    transform: translate(30px, 8px);
    &:last-of-type {
      margin-left: 18px;
    }
    svg {
      background: none;
      font-size: 24px;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tabletLan}) {
    justify-content: space-around;
    width: 330px;
    max-width: 90%;
    margin: 0 auto 20px;
    a {
      transform: translate(0, 8px);
      &:last-of-type {
        margin-left: 0;
      }
    }
  }
`;

export const SmallPrint = styled.div`
  display: flex;
  p {
    color: white;
    opacity: 0.5;
    font-size: 1.2rem;
  }
  a {
    margin-left: 14px;
    color: white;
    opacity: 0.5;
    font-size: 1.2rem;
    transform: translateY(1px);
    transition: opacity 0.2s ease-in-out;
    &:hover {
      opacity: 1;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletLan}) {
    display: block;
    text-align: center;
    p {
      width: 100%;
    }
    a:first-of-type {
      margin-left: 0;
    }
  }
`;

export const FreeTrialContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 50%;
  transform: translate(-50%, -220px);
  width: 90vw;
  height: 440px;
  border-radius: 20px;
  background-image: url(${FormBackground});
  background-size: cover;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    transform: translate(-50%, -175px);
    height: 380px;
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

export const Benefits = styled.div`
  /* transform: translateX(14px);
  display: flex;
  justify-content: space-between; */
  text-align: center;
  width: 80%;
  margin: 0 auto;
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    display: block;
    transform: translateX(0);
  }
`;
