import styled from 'styled-components';

export const BlogWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20rem -1.5rem 4rem;
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    margin: -1rem 0;
  }
`;

export const BlogContainer = styled.div`
  position: relative;
  flex-basis: calc(33.3333% - 3rem);
  margin: 0 1.5rem 6.4rem;
  transition: transform 450ms;
  &:hover {
    transform: scale(1.08);
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletPor}) {
    flex-basis: calc(50% - 3rem);
    margin: 0 1.5rem 5rem;
    transition: none;
    &:hover {
      transform: none;
    }
  }
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    flex-basis: 100%;
    margin: 0 0 5rem;
  }
`;

export const ImgWrap = styled.div`
  position: relative;
  width: 100%;
  height: 20rem;
  overflow: hidden;
  border-radius: 15px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: all 0.4s ease-in-out;
  }
  @media (max-width: ${(props) => props.theme.breakpoints.laptop}) {
    height: 16rem;
  }
`;

export const TextWrap = styled.div`
  p,
  em {
    font-size: 1.2rem;
    margin: 0.6rem 0;
  }
  h3 {
    margin: 0;
    font-size: 2.6rem;
    font-weight: normal;
    line-height: 1.2;
    transform: none;
  }
`;

export const Info = styled.div`
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1;
  text-transform: uppercase;
  margin-top: 5px;
  span {
    margin: 0 8px;
  }
`;
