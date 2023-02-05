import React from 'react';
import { Link } from 'gatsby';

import { TightInnerWrap } from 'components/common/Containers/styled';
import { Button } from 'components/common/Buttons';

import { Container, ServicesWrap, Service, IconWrap } from './styled';

const Services = ({ edges }) => {
  return (
    <Container>
      <TightInnerWrap>
        <h2>Our services</h2>
        <p>
          We empower self-motivated individuals to take control of their
          finances and plan for their financial freedom
        </p>
        <ServicesWrap>
          {Object.values(edges).map((service) => {
            return (
              <Service>
                <Link to={`/services/${service.node.slug}`}>
                  <IconWrap>
                    <img
                      src={service.node.icon.file.url}
                      alt={service.node.title}
                    />
                  </IconWrap>
                  <p>{service.node.title}</p>
                </Link>
              </Service>
            );
          })}
        </ServicesWrap>
        <Button>
          <Link to='/services'>View services</Link>
        </Button>
      </TightInnerWrap>
      {}
    </Container>
  );
};

export default Services;
