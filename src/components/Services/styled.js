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
