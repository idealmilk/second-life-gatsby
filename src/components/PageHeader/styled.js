import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-bottom: 15rem;
`;

export const Circle = styled.div`
  position: absolute;
  top: -200rem;
  left: 50%;
  transform: translate(-50%, -20rem);
  width: 300vh;
  height: 300vh;
  background-color: ${(props) => props.theme.colors.blue};
  border-radius: 50%;
  @media (max-width: ${(props) => props.theme.breakpoints.laptop}) {
    transform: translate(-50%, 0);
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    display: block;
    padding: 170px 0 120px;
  }
`;

export const ImageOverlay = styled(Circle)`
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-position: 130% 0;
  background-size: contain;
  opacity: 14%;
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
    margin: 0 0 3rem;
    font-size: 5rem;
    height: 16.5rem;
    transform: ${(props) => (props.title ? 'none' : 'translateY(9rem)')};
  }
  h4 {
    display: inline-block;
    margin: 4rem 0 1.8rem;
    font-size: 1.2rem;
    width: auto;
    border-radius: 1.6rem;
    padding: 0.8rem 2rem;
    text-transform: uppercase;
    color: white;
    background-color: ${(props) => props.theme.colors.orange};
  }
  img {
    width: 40rem;
    border-radius: 2.5rem;
    margin: -6rem 0 -8rem;
  }
  button {
    margin-top: 40px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    h1 {
      font-size: 3.6rem;
    }
  }
`;
