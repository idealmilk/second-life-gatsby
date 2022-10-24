import React from 'react';
import { Link } from 'gatsby';

import { RichText } from 'components';
import { FeatureWrap } from 'components/common/Containers/styled';
import { Button, ContactButton } from 'components/common/Buttons';

import { TextWrap, TitleWrap, ButtonWrap } from './styled';

const Publications = ({ node, callbackFunction }) => {
  return (
    <FeatureWrap>
      <TextWrap>
        <TitleWrap>
          <img src={node.icon.file.url} alt='Service Icon' />
          <h3>{node.title}</h3>
        </TitleWrap>
        <RichText {...node.description} />

        <ButtonWrap>
          <Button hollow={true}>
            <Link to={`/services/${node.slug}`}>Read More</Link>
          </Button>
          <Button onClick={callbackFunction}>Book Consultation</Button>
        </ButtonWrap>
      </TextWrap>
      <img
        src={node.image.file.url}
        alt='Feature'
        class={node.image.file.url.includes('WebIcons') ? '' : 'drop-shadow'}
      />
    </FeatureWrap>
  );
};

export default Publications;
