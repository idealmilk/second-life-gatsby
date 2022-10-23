import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 4rem 0;
  transform: translateY(-110.17px);
  h2 {
    text-align: center;
    margin-bottom: 4rem;
  }
`;

export const CaseStudiesWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

export const CaseStudy = styled.div`
  width: 30%;
  background: ${(props) => props.theme.colors.blue};
  border-radius: 2.5rem;
  padding: 2rem;
  img {
    border-radius: 2.2rem;
  }
  p {
    color: white;
    &:first-of-type {
      margin: 2rem 0 1rem;
      font-family: 'Gotham Bold';
      font-size: 2.6rem;
    }
  }
`;
