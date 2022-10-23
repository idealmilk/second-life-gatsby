import React from 'react';
import styled from 'styled-components';

import MainLayout from 'layouts/MainLayout';
import { Hero, SEO, Services, Video } from 'components';
import { TextWrap } from 'components/common/Containers/styled';

const StyledTextWrap = styled(TextWrap)`
  margin: -2rem auto 20rem;
`;

const IndexPage = () => {
  return (
    <MainLayout>
      <SEO />
      <Hero />

      <StyledTextWrap>
        <h2>Fully transparent. Value for money. Evidence-based.</h2>
        <p>
          We won’t sell you products or pretend we can predict the future. But
          we will give you all the information and support you need to identify
          and achieve your goals. And because you won’t be paying us to manage
          your investments, you’ll save yourself a fortune in fees.
        </p>
      </StyledTextWrap>

      <Services />
      <Video />
    </MainLayout>
  );
};

export default IndexPage;
