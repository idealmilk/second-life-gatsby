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
  width: 100%;
  justify-content: space-between;
  margin: 4rem 0 1rem;
`;

export const Logo = styled.div`
  width: 30%;
  text-align: center;
  p {
    font-family: 'Gotham Bold';
    font-size: 2.6rem;
    color: white;
  }
`;
