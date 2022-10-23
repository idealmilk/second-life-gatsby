import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 12rem;
  padding: 4rem 0;
  background: ${(props) => props.theme.colors.orange};
  h2 {
    text-align: center;
    color: white;
    margin-bottom: 4rem;
  }
  .slick-dots,
  .slick-active {
    button {
      &::before {
        color: white !important;
      }
    }
  }
  .slick-prev,
  .slick-next {
    &::before {
      font-size: 3rem;
    }
  }
  .slick-prev {
    transform: translate(18rem, -5rem);
    z-index: 100;
  }
  .slick-next {
    transform: translate(-18rem, -5rem);
  }
`;

export const InnerWrap = styled.div``;

export const TextWrap = styled.div`
  width: 76rem;
  max-width: 90%;
  margin: 0 auto;
  p {
    font-family: 'Gotham Bold';
    color: white;
    text-align: center;
  }
`;
