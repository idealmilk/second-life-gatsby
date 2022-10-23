import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Container, InnerWrap, TextWrap } from './styled';

const Testimonials = ({ edges }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <h2>What clients say</h2>
      <Slider {...settings}>
        {Object.values(edges).map((edge, index) => {
          return (
            <InnerWrap>
              <TextWrap>
                <p>{edge.node.body.body}</p>
                <p>- {edge.node.customerName}</p>
              </TextWrap>
            </InnerWrap>
          );
        })}
      </Slider>
    </Container>
  );
};

export default Testimonials;
