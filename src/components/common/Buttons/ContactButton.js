import React, { useState } from 'react';

import { ContactModal } from 'components';
import { ContactForm } from 'components/common/Forms';

import { Container } from './styled';

const ContactButton = ({ children, clickOrigin }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    // parentCallback();
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <Container onClick={handleModalOpen}>
        {children ? children : 'Book consultation'}
      </Container>
      {modalOpen && (
        <ContactModal parentCallback={handleModalOpen}>
          <h2>Book your consultation</h2>
          <ContactForm contactType='Consultation' clickOrigin={clickOrigin} />
        </ContactModal>
      )}
    </>
  );
};

export default ContactButton;
