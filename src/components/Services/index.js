import React from 'react';

import { TightInnerWrap } from 'components/common/Containers/styled';
import { Button } from 'components/common/Buttons';

import { Container, ServicesWrap } from './styled';

const Services = () => {
  const services = [
    {
      title: 'Financial planning',
      // image:
    },
    {
      title: 'Retirement planning',
      // image:
    },
    {
      title: 'Coaching and mentoring',
      // image:
    },
  ];
  return (
    <Container>
      <TightInnerWrap>
        <h2>Our Services</h2>
        <p>
          We empower self-motivated individuals to take control of their
          finances and plan for their financial freedom
        </p>
        <ServicesWrap>
          {services.map((service) => {
            return <p>{service.title}</p>;
          })}
        </ServicesWrap>
        <Button>View Services</Button>
      </TightInnerWrap>
      {}
    </Container>
  );
};

export default Services;
