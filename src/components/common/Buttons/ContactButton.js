import React, { useState } from 'react';

import { ContactModal } from 'components';
import { ContactForm } from 'components/common/Forms';

import { Container } from './styled';

const ContactButton = ({ color, endpoint, router, children }) => {
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
          <ContactForm endpoint={endpoint} router={router} />
        </ContactModal>
      )}
    </>
  );
};

export default ContactButton;
