import React from 'react';

import { Button } from 'components/common/Buttons';

import { Container, InnerWrapStyled, ContentWrap, FormWrap } from './styled';

const Hero = ({
  header,
  subheader,
  formLink,
  setEmailCallback,
  toggleModalOpen,
}) => {
  return (
    <Container>
      <InnerWrapStyled>
        <ContentWrap>
          <h1>{header}</h1>
          <p>{subheader}</p>
          <FormWrap>
            <Button clickOrigin='Header'>
              <a
                href={formLink}
                target='_blank'
                rel='noreferrer'
                aria-label='Twitter'
              >
                Book consultation
              </a>
            </Button>
          </FormWrap>
        </ContentWrap>
      </InnerWrapStyled>
    </Container>
  );
};

export default Hero;
