import styled from 'styled-components';

import { ContactPageHeaderHero, PageHeaderHero } from 'assets/Layout';

export const Container = styled.div`
  display: ${(props) => (props.shownOnDesktop === false ? 'none' : 'block')};
  padding: 210px 0 200px;
  margin: 40px auto -180px;
  background-image: ${(props) =>
    props.isContact
      ? `url(${ContactPageHeaderHero})`
      : `url(${PageHeaderHero})`};
  background-size: cover;
  background-position: bottom;
  transform: translateY(-180px);
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    display: block;
    padding: 170px 0 120px;
  }
`;

export const InnerWrap = styled.div`
  width: 540px;
  max-width: 90%;
  margin: 0 auto;
  text-align: center;
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
