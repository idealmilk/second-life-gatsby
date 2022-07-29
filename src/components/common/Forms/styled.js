import styled from 'styled-components';

export const InputContainer = styled.div`
  width: ${(props) => (props.isColumn ? 'calc(50% - 14px)' : '100%')};
  margin-bottom: ${(props) => (props.isEmail ? '0' : '28px')};
  input {
    width: 100%;
    padding: 14px;
    border: none;
    font-size: 1.6rem;
    border-radius: 6px;
    background: ${(props) => (props.color === 'blue' ? '#eef3f6' : 'white')};
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletLan}) {
    width: 100%;
  }
`;

export const TextAreaContainer = styled.div`
  width: ${(props) => (props.isColumn ? 'calc(50% - 14px)' : '100%')};
  margin-bottom: 28px;
  textarea {
    width: 100%;
    height: 200px;
    padding: 14px;
    border: none;
    font-size: 1.6rem;
    border-radius: 6px;
    background: ${(props) => (props.color === 'blue' ? '#eef3f6' : 'white')};
  }
  @media (max-width: ${(props) => props.theme.breakpoints.tabletLan}) {
    width: 100%;
  }
`;
