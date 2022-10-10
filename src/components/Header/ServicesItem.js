import React from 'react';
import { Link } from 'gatsby';

import { ServicesItemContainer, ServicesImageWrap } from './styled';

const ServicesItem = ({ title, subtitle, image, slug }) => {
  return (
    <Link to={slug}>
      <ServicesItemContainer>
        {/* <ServicesImageWrap>
          <img src={image} alt={title} />
        </ServicesImageWrap> */}
        <p>
          <span>{title}</span>
          <br></br>
          {subtitle}
        </p>
      </ServicesItemContainer>
    </Link>
  );
};

export default ServicesItem;
