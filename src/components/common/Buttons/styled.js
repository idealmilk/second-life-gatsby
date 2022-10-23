import styled from 'styled-components';

export const Container = styled.button`
  display: inline-block;
  z-index: 100;
  font-size: 1.5rem;
  font-weight: 400;
  color: #ffffff;
  letter-spacing: 1px;
  background: ${(props) => props.theme.colors.orange};
  border-radius: 28px;
  padding: 14px 28px;
  line-height: 1.25;
  letter-spacing: 1px;
  border: 0;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: opacity 0.5s ease-out;
  a {
    color: white;
    font-size: 1.5rem;
  }
  &:hover {
    opacity: 0.9;
  }
`;
