import React from 'react';
import { Link } from 'gatsby';

import { RichText } from 'components';
import { FeatureWrap } from 'components/common/Containers/styled';
import { Button } from 'components/common/Buttons';

import { TextWrap, TitleWrap, ButtonWrap } from './styled';

const ServicePreview = ({ node, callbackFunction, reverse }) => {
  return (
    <FeatureWrap reverse={reverse}>
      <TextWrap>
        <Link to={`/services/${node.slug}`}>
          <TitleWrap>
            <img src={node.icon.file.url} alt='Service Icon' />
            <h3>{node.title}</h3>
          </TitleWrap>
        </Link>
        <RichText {...node.description} />

        <ButtonWrap>
          <Link to={`/services/${node.slug}`}>
            <Button hollow={true}>Read More</Button>
          </Link>
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

export default ServicePreview;
