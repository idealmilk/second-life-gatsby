import React, { useState } from 'react';

import { Button } from 'components/common/Buttons';
import { FormInput } from 'components/common/Forms';

import {
  Container,
  FormWrap,
  InputWrap,
  InputRow,
  FormResponse,
} from './styled';

const ContactForm = ({ endpoint, givenEmail }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [sent, setSent] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  if (givenEmail) {
    setEmail(givenEmail);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let enquiryData = {
      subject: 'New Partner Program Enquiry',
      name: `${firstName} ${lastName}`,
      email: email,
      number: number,
      sendEmail: false,
    };

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(enquiryData),
    };

    fetch(`/api/${endpoint}`, options).then((response) =>
      setResponseMessage(
        response.status === 200
          ? 'Thank you for your enquiry. Our team will be in touch shortly.'
          : 'We could not send your enquiry.  Please try again.'
      )
    );

    setSent(true);
    setFirstName('');
    setLastName('');
    setEmail('');
    setNumber('');
  };

  return (
    <Container onSubmit={handleFormSubmit}>
      <FormWrap style={{ display: sent ? 'none' : 'block' }}>
        <InputWrap>
          <InputRow>
            <FormInput
              type='text'
              name='name'
              required
              value={firstName}
              placeholder='First name'
              isColumn={true}
              color='blue'
              handleChange={(e) => setFirstName(e.target.value)}
            />

            <FormInput
              type='text'
              name='name'
              required
              value={lastName}
              placeholder='Last name'
              isColumn={true}
              color='blue'
              handleChange={(e) => setLastName(e.target.value)}
            />
          </InputRow>
          <InputRow>
            <FormInput
              type='email'
              required
              name='email'
              value={email}
              placeholder='Email Address'
              isColumn={true}
              color='blue'
              handleChange={(e) => setEmail(e.target.value)}
            />

            <FormInput
              type='text'
              name='number'
              required
              value={number}
              placeholder='Phone Number'
              style={{ marginBottom: '20px' }}
              isColumn={true}
              color='blue'
              handleChange={(e) => setNumber(e.target.value)}
            />
          </InputRow>
        </InputWrap>

        <Button type='submit' color='orange' size='large'>
          Submit Enquiry
        </Button>
      </FormWrap>
      <FormResponse style={{ opacity: sent ? 1 : 0 }}>
        <p>{responseMessage === '' ? '' : responseMessage}</p>
      </FormResponse>
    </Container>
  );
};

export default ContactForm;
