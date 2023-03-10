import React from 'react';
import { Link } from 'gatsby';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { TightInnerWrap } from 'components/common/Containers/styled';

import { Container, CarouselWrap, CaseStudiesWrap, CaseStudy } from './styled';

const settings = {
  dots: true,
  infinite: true,
  autoplaySpeed: 2000,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const CaseStudies = ({ edges }) => {
  return (
    <Container>
      <TightInnerWrap>
        <h2>Success stories</h2>
        <CaseStudiesWrap>
          {Object.values(edges).map((caseStudy) => {
            return (
              <CaseStudy>
                <Link to={`/case-studies/${caseStudy.node.slug}`}>
                  <img
                    src={caseStudy.node.customerImage.file.url}
                    alt={caseStudy.node.title}
                  />
                  <p>{caseStudy.node.title}</p>
                  <p>{caseStudy.node.description}</p>
                </Link>
              </CaseStudy>
            );
          })}
        </CaseStudiesWrap>
      </TightInnerWrap>

      <CarouselWrap>
        <Slider {...settings}>
          {Object.values(edges).map((caseStudy) => {
            return (
              <CaseStudy>
                <Link to={`/case-studies/${caseStudy.node.slug}`}>
                  <img
                    src={caseStudy.node.customerImage.file.url}
                    alt={caseStudy.node.title}
                  />
                  <p>{caseStudy.node.title}</p>
                  <p>{caseStudy.node.description}</p>
                </Link>
              </CaseStudy>
            );
          })}
        </Slider>
      </CarouselWrap>
    </Container>
  );
};

export default CaseStudies;
