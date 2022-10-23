import React from 'react';
import { Link } from 'gatsby';

import { TightInnerWrap } from 'components/common/Containers/styled';
import { Button } from 'components/common/Buttons';

import { Container, CaseStudiesWrap, CaseStudy } from './styled';

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
    </Container>
  );
};

export default CaseStudies;
