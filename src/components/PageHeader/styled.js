import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-bottom: 10rem;
  z-index: -1;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.colors.blue};
    border-radius: 0 0 50% 50%/ 0 0 100% 100%;
    transform: scaleX(1.5);
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    height: 34vh;
  }
`;

export const ImageOverlay = styled(Container)`
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-position: 130% 0;
  background-size: contain;
  opacity: 14%;
`;

export const InnerWrap = styled.div`
  position: relative;
  z-index: 1;
  margin: 0 auto;
  width: 540px;
  max-width: 90%;
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
    margin: 8rem 0 1.8rem;
    font-size: 1.2rem;
    width: auto;
    border-radius: 1.6rem;
    padding: 0.8rem 2rem;
    text-transform: uppercase;
    color: white;
    background-color: ${(props) => props.theme.colors.orange};
  }

  button {
    margin-top: 40px;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    transform: translateY(2rem);
    h1 {
      font-size: 3.6rem;
    }
    img {
      margin: -10rem 0 0;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    transform: translateY(8rem);
    h4 {
      margin-top: 0;
    }
    h1 {
      font-size: 2.6rem;
    }
  }
`;
