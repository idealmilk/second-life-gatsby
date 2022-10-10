import styled from 'styled-components';

import { ContactPageHeaderHero, PageHeaderHero } from 'assets/Layout';

export const Container = styled.div`
  position: relative;
`;

export const Circle = styled.div`
  position: absolute;
  top: -200rem;
  left: 50%;
  transform: translate(-50%, 0);
  width: 300vh;
  height: 300vh;
  background-color: ${(props) => props.theme.colors.blue};
  border-radius: 50%;

  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    display: block;
    padding: 170px 0 120px;
  }
`;

export const InnerWrap = styled.div`
  position: relative;
  width: 540px;
  max-width: 90%;
  margin: 0 auto;
  z-index: 10;
  text-align: center;
  color: white;
  h1 {
    margin: 0 0 30px;
  }
  h4 {
    display: inline-block;
    margin-bottom: 18px;
    font-size: 1.2rem;
    width: auto;
    border-radius: 16px;
    padding: 8px 20px;
    text-transform: uppercase;
    color: white;
    background-color: ${(props) => props.theme.colors.orange};
  }
  button {
    margin-top: 40px;
  }
`;
