import React from 'react';

import { EmailForm } from 'components/common/Forms';

import { Container, InnerWrapStyled, ContentWrap, FormWrap } from './styled';

const Hero = ({ header, subheader, setEmailCallback, toggleModalOpen }) => {
  return (
    <Container>
      <InnerWrapStyled>
        <ContentWrap>
          <h1>{header}</h1>
          <p>{subheader}</p>
          <FormWrap>
            <EmailForm
              setEmailCallback={setEmailCallback}
              toggleModalOpen={toggleModalOpen}
            />
          </FormWrap>
        </ContentWrap>
      </InnerWrapStyled>
    </Container>
  );
};

export default Hero;
