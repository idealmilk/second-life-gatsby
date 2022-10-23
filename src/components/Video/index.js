import React from 'react';
import { FaCheck } from 'react-icons/fa';

import { Container, StyledInnerWrap, FeaturesWrap, VideoWrap } from './styled';

const Video = ({ video, list }) => {
  return (
    <Container>
      <StyledInnerWrap>
        <VideoWrap>
          <iframe
            src={video}
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
            class='drop-shadow'
          ></iframe>
        </VideoWrap>
        <FeaturesWrap>
          {list.map((item) => {
            return (
              <p>
                <FaCheck />
                {item}
              </p>
            );
          })}
        </FeaturesWrap>
      </StyledInnerWrap>
    </Container>
  );
};

export default Video;
