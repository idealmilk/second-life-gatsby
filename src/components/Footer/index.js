import React from 'react';
import { Link } from 'gatsby';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';

import { LogoWhite } from 'assets/Logos';
import { InnerWrap } from 'components/common/Containers/styled';

import {
  Container,
  FormWrap,
  Content,
  Pages,
  PagesWrap,
  PageList,
  PageItem,
  LogoWrap,
  SocialsWrap,
  SmallPrint,
} from './styled';

const Footer = () => {
  return (
    <Container>
      <InnerWrap>
        <Content>
          <FormWrap></FormWrap>
          <Pages>
            <PagesWrap>
              <PageList>
                <PageItem>Company</PageItem>
                <PageItem>
                  <Link to='/about'>About</Link>
                </PageItem>
                <PageItem>
                  <Link to='/pricing'>Pricing</Link>
                </PageItem>
                <PageItem>
                  <Link to='/services'>Services</Link>
                </PageItem>
                <PageItem>
                  <Link to='/contact'>Contact</Link>
                </PageItem>
              </PageList>

              <PageList>
                <PageItem>Case Studies</PageItem>
                <PageItem>
                  <Link to='/case-studies/'>Mid-to-late-30s</Link>
                </PageItem>
                <PageItem>
                  <Link to='/case-studies'>Mid-50s</Link>
                </PageItem>
                <PageItem>
                  <Link to='/case-studies'>Mid-60s</Link>
                </PageItem>
              </PageList>

              <PageList>
                <PageItem>Data</PageItem>
                <PageItem>
                  <Link to='/privacy-policy'>Privacy Policy</Link>
                </PageItem>
                <PageItem>
                  <Link to='/terms-and-conditions'>Terms & Conditions</Link>
                </PageItem>
              </PageList>
            </PagesWrap>
          </Pages>
        </Content>
        <LogoWrap>
          <img src={LogoWhite} alt='Second Life' />
          <SocialsWrap>
            <a
              href='https://www.linkedin.com/company/secondlife/mycompany/'
              target='_blank'
              rel='noreferrer'
              aria-label='LinkedIn'
            >
              <FaLinkedinIn color='white' />
            </a>
            <a
              href=' https://twitter.com/secondlife'
              target='_blank'
              rel='noreferrer'
              aria-label='Twitter'
            >
              <FaTwitter color='white' />
            </a>
          </SocialsWrap>
        </LogoWrap>
        <SmallPrint>
          <p>© 2022 Second Life Ltd. All Rights Reserved</p>
        </SmallPrint>
      </InnerWrap>
    </Container>
  );
};

export default Footer;
