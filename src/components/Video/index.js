import React from 'react';
import { FaCheck } from 'react-icons/fa';

import { Container, StyledInnerWrap, FeaturesWrap, VideoWrap } from './styled';

const Video = () => {
  return (
    <Container>
      <StyledInnerWrap>
        <VideoWrap>
          <iframe
            src='https://www.youtube.com/embed/uIc2beTpKUU'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </VideoWrap>
        <FeaturesWrap>
          <p>
            <FaCheck />
            Fully transparent
          </p>
          <p>
            <FaCheck />
            Value for money
          </p>
          <p>
            <FaCheck />
            Evidence-based
          </p>
        </FeaturesWrap>
      </StyledInnerWrap>
    </Container>
  );
};

export default Video;
