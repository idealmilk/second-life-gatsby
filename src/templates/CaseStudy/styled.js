import styled from 'styled-components';

export const CustomerName = styled.div`
  width: 100%;
  text-align: center;
  transform: translateY(-2rem);
  p {
    font-family: 'Gotham Bold' !important;
    font-size: 2.4rem;
    color: ${(props) => props.theme.colors.blue};
  }
`;
