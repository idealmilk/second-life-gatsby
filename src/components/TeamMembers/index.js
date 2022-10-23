import React from 'react';

import { RichText } from 'components';
import { AboutFeatureWrap } from 'components/common/Containers/styled';

import { Container, TextWrap } from './styled';

const TeamMembers = ({ edges }) => {
  return (
    <Container>
      <h2>Our team</h2>
      {Object.values(edges.reverse()).map((edge, index) => {
        return (
          <AboutFeatureWrap pos={index}>
            <TextWrap>
              <p class='name'>{edge.node.name}</p>
              <p class='job-title'>{edge.node.jobTitle}</p>
              <RichText {...edge.node.body} />
            </TextWrap>

            <img
              src={edge.node.headshot.file.url}
              class='drop-shadow'
              alt='Feature'
            />
          </AboutFeatureWrap>
        );
      })}
    </Container>
  );
};

export default TeamMembers;
