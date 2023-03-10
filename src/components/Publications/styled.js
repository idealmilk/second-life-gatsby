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
  margin: 4rem 0 1rem;
`;

export const Logo = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 33.3333%;
  flex-basis: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  p {
    font-family: 'Gotham Bold';
    font-size: 2.6rem;
    color: white;
  }
`;
