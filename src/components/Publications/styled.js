import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  margin: 0 auto 6rem;
  padding: 4rem 0;

  p {
    margin: 2rem auto 0;
    max-width: 50rem;
  }
`;

export const LogoWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center !important;
  width: 100%;
  margin: 4rem 0 1rem;
`;

export const Logo = styled.div`
  width: calc(20% - 35px);
  text-align: center;
  p {
    font-family: 'Gotham Bold';
    font-size: 2.6rem;
    color: white;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletLan}) {
    width: calc(25% - 35px);
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    width: calc(33% - 35px);
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: calc(50% - 35px);
  }
`;
