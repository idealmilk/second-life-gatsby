import styled from 'styled-components';

import { TightInnerWrap } from 'components/common/Containers/styled';

export const Container = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  margin: 12rem auto;
  transform: translateY(-110.17px);
`;

export const StyledInnerWrap = styled(TightInnerWrap)`
  display: flex;
  justify-content: space-between;
`;

export const FeaturesWrap = styled.div`
  margin: auto;
  p {
    text-align: left;
    font-family: 'Gotham Bold';
    font-size: 2.4rem;
    line-height: 2;
    svg {
      color: ${(props) => props.theme.colors.orange};
      font-size: 2.6rem;
      transform: translate(-1.4rem, 0.5rem);
    }
    &:first-of-type {
      transform: translateX(10rem);
    }
    &:nth-of-type(2) {
      transform: translateX(5rem);
    }
  }
`;

export const VideoWrap = styled.div`
  width: 60%;
  iframe {
    width: 100%;
    height: 40rem;
    border-radius: 2.4rem;
  }
`;
