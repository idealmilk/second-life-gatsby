import styled from 'styled-components';

import { TightInnerWrap } from 'components/common/Containers/styled';

import Hero from 'assets/hero.jpg';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${Hero});
  background-repeat: no-repeat;
  background-size: 130% auto;
  background-position: right -40rem top -14rem;
  background-color: orange;
  transform: translateY(-110.17px);
`;

export const InnerWrapStyled = styled(TightInnerWrap)`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const ContentWrap = styled.div`
  margin: auto 0;
  background-color: transparent;
  color: white;
  width: 60%;
  p {
    margin: 1rem 0;
    width: 75%;
  }
`;

export const FormWrap = styled.div`
  width: 75%;
`;
