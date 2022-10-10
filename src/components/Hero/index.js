import React from 'react';

import { EmailForm } from 'components/common/Forms';

import { Container, InnerWrapStyled, ContentWrap, FormWrap } from './styled';

const Hero = () => {
  return (
    <Container>
      <InnerWrapStyled>
        <ContentWrap>
          <h1>Plan for your financial freedom</h1>
          <p>
            Comprehensive financial and retirement planning, plus ongoing
            guidance and coaching, from highly qualified and experienced
            professionals
          </p>
          <FormWrap>
            <EmailForm />
          </FormWrap>
        </ContentWrap>
      </InnerWrapStyled>
    </Container>
  );
};

export default Hero;
