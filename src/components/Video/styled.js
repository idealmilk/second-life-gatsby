import styled from 'styled-components';

import { TightInnerWrap } from 'components/common/Containers/styled';

export const Container = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  margin: 12rem auto;
  transform: translateY(-110.17px);
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    margin: 8rem auto 6rem;
  }
`;

export const StyledInnerWrap = styled(TightInnerWrap)`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    display: block;
  }
`;

export const FeaturesWrap = styled.div`
  margin: auto;
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    display: flex;
    justify-content: space-between;
  }
  p {
    text-align: left;
    font-family: 'Gotham Bold';
    font-size: 2.4rem;
    line-height: 2;
    svg {
      color: ${(props) => props.theme.colors.orange};
      font-size: 2.6rem;
      transform: translate(-1.4rem, 0.5rem);
    }
    &:first-of-type {
      transform: translateX(10rem);
    }
    &:nth-of-type(2) {
      transform: translateX(5rem);
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 3rem auto 0;
    p {
      font-size: 1.8rem;
      &:first-of-type {
        transform: none;
      }
      &:nth-of-type(2) {
        transform: none;
      }
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: block;
    margin: 3rem auto 0;
    width: 100%;
    text-align: center;
    p {
      margin: 0 auto;
      font-size: 1.8rem;
      text-align: center;
      svg {
        font-size: 1.8rem;
        transform: translate(0, 0.3rem);
        margin-right: 1.4rem;
      }
    }
  }
`;

export const VideoWrap = styled.div`
  width: 60%;
  iframe {
    width: 100%;
    height: 40rem;
    border-radius: 2.4rem;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    width: 100%;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    iframe {
      height: 22rem;
    }
  }
`;
