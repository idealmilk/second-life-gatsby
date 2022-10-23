import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  background: ${(props) => props.theme.colors.blue};
  color: white;
  text-align: center;
  margin: 0 auto;
  padding: 4rem 0;
  transform: translateY(-110.17px);

  p {
    margin: 2rem auto 0;
    max-width: 50rem;
  }
`;

export const ServicesWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 4rem 0 1rem;
`;

export const Service = styled.div`
  width: 30%;
  text-align: center;
  p {
    font-family: 'Gotham Bold';
    font-size: 2.6rem;
    color: white;
  }
`;

export const IconWrap = styled.div`
  position: relative;
  background-color: white;
  width: 13rem;
  height: 13rem;
  border-radius: 50%;
  margin: 0 auto;
  text-align: center;
  img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
  }
`;
