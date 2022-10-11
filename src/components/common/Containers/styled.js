import styled from 'styled-components';

export const InnerWrap = styled.div`
  max-width: 1300px;
  width: 90%;
  margin: auto;
`;

export const TightInnerWrap = styled(InnerWrap)`
  max-width: 1100px;
`;

export const TextWrap = styled.div`
  max-width: 700px;
  width: 90%;
  margin: 0 auto;
  text-align: center;
  h2 {
    margin-bottom: 2rem;
  }
`;
