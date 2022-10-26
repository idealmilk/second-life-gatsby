import React from 'react';

import { ContactModal, Header, MobileNav, Footer } from 'components';
import { ContactForm } from 'components/common/Forms';

import { Container, Content, ChildrenWrap } from './styled';

const MainLayout = ({
  children,
  modalOpen,
  parentCallback,
  email,
  clickOrigin,
}) => {
  return (
    <Container>
      <Content>
        <Header />
        <MobileNav />
        <ChildrenWrap>{children}</ChildrenWrap>
        <Footer />
      </Content>

      {modalOpen && (
        <ContactModal parentCallback={parentCallback}>
          <h2>Book your consultation</h2>
          <ContactForm
            givenEmail={email}
            contactType='Consultation'
            clickOrigin={clickOrigin}
          />
        </ContactModal>
      )}
    </Container>
  );
};

export default MainLayout;
