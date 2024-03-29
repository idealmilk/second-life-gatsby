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

export const CarouselWrap = styled.div`
  display: none;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: block;
  }
`;

export const CaseStudiesWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    margin-bottom: 0;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const CaseStudy = styled.div`
  width: 30%;
  background: ${(props) => props.theme.colors.blue};
  border-radius: 2.5rem;
  padding: 2rem;
  transition: transform 450ms;
  &:hover {
    transform: scale(1.08);
  }
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
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    p {
      &:first-of-type {
        margin: 1rem 0 1.6rem;
        font-size: 1.8rem;
      }
    }
    &:hover {
      transform: none;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 90% !important;
    margin: 0 6% 2rem 4%;
  }
`;
