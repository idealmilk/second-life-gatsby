import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';

import { SciLeadsInverted } from 'assets/Logos';
import { InnerWrap } from 'components/common/Containers/styled';
import { Deloitte, Fast50, Fast50Ireland } from 'assets/Footer';

import {
  Container,
  AwardWrap,
  AwardTagWrap,
  AwardTextWrap,
  AwardImgWrap,
  Content,
  PagesWrap,
  PageList,
  PageItem,
  LogoWrap,
  SmallPrint,
} from './styled';

const StyledInnerWrap = styled(InnerWrap)`
  display: flex;
  justify-content: space-between;
  padding: 60px 0;
`;

const Footer = () => {
  return (
    <Container>
      <StyledInnerWrap>
        <AwardWrap>
          <AwardTagWrap>
            <p>Award winning</p>
          </AwardTagWrap>
          <AwardTextWrap>
            <img src={Deloitte} alt='' />
            <p>
              <span>Fast 50 2021</span> ranked company
            </p>
          </AwardTextWrap>
          <AwardImgWrap>
            <img src={Fast50} alt='' />
            <img src={Fast50Ireland} alt='' />
          </AwardImgWrap>
        </AwardWrap>
        <Content>
          <PagesWrap>
            <PageList>
              <PageItem>Solutions</PageItem>
              <PageItem>
                <Link to='/solutions/sales'>Sales</Link>
              </PageItem>
              <PageItem>
                <Link to='/solutions/marketing'>Marketing</Link>
              </PageItem>
              <PageItem>
                <Link to='/solutions/startups'>Startups</Link>
              </PageItem>
              <PageItem>
                <Link to='/pricing'>Pricing</Link>
              </PageItem>
            </PageList>

            <PageList>
              <PageItem>Resources</PageItem>
              <PageItem>
                <Link to='/events'>Events</Link>
              </PageItem>
              <PageItem>
                <Link to='/news'>News & Blog</Link>
              </PageItem>
              <PageItem>
                <Link to='/partner-program'>Partners</Link>
              </PageItem>
              <PageItem>
                <Link to='/refer-a-friend-to-scileads'>Referrals</Link>
              </PageItem>
            </PageList>

            <PageList>
              <PageItem>Company</PageItem>
              <PageItem>
                <Link to='/careers'>Careers</Link>
              </PageItem>
              <PageItem>
                <Link to='/about-us'>About</Link>
              </PageItem>
              <PageItem>
                <Link to='/contact'>Contact</Link>
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
              <PageItem>
                <Link to='/european-union-support'>European Union Support</Link>
              </PageItem>
            </PageList>
          </PagesWrap>
          <div>
            <LogoWrap>
              <img src={SciLeadsInverted} alt='SciLeads' />
              <a
                href='https://www.linkedin.com/company/scileads/mycompany/'
                target='_blank'
                rel='noreferrer'
                aria-label='LinkedIn'
              >
                <FaLinkedinIn color='white' />
              </a>
              <a
                href=' https://twitter.com/SciLeads'
                target='_blank'
                rel='noreferrer'
                aria-label='Twitter'
              >
                <FaTwitter color='white' />
              </a>
            </LogoWrap>
            <SmallPrint>
              <p>© 2022 SciLeads Ltd. All Rights Reserved</p>
              <Link to='/opt-out'>Do not sell my personal information</Link>
            </SmallPrint>
          </div>
        </Content>
      </StyledInnerWrap>
    </Container>
  );
};

export default Footer;
