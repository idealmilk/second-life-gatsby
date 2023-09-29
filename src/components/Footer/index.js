import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';

import { LogoWhite } from 'assets/Logos';
import { Button } from 'components/common/Buttons';
import { InnerWrap } from 'components/common/Containers/styled';

import {
  Container,
  Content,
  FormWrap,
  Pages,
  PagesWrap,
  PageList,
  PageItem,
  LogoWrap,
  SocialsWrap,
  SmallPrint,
} from './styled';

const Footer = () => {
  const { header } = useStaticQuery(query).contentfulHero;
  const { twitter, linkedIn, copyright } = useStaticQuery(
    query
  ).contentfulSiteData;

  return (
    <Container>
      <InnerWrap>
        <Content>
          <FormWrap>
            <h3>{header}</h3>
            <Button clickOrigin='Header'>
              <a
                href='https://www.surveymonkey.co.uk/r/NHNTQ9T'
                target='_blank'
                rel='noreferrer'
                aria-label='Twitter'
              >
                Book consultation
              </a>
            </Button>
          </FormWrap>
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
                  <Link to='/case-studies/mid-to-late-30s'>
                    Mid-to-late-30s
                  </Link>
                </PageItem>
                <PageItem>
                  <Link to='/case-studies/mid-50s'>Mid-50s</Link>
                </PageItem>
                <PageItem>
                  <Link to='/case-studies/mid-60s'>Mid-60s</Link>
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
              href={linkedIn}
              target='_blank'
              rel='noreferrer'
              aria-label='LinkedIn'
            >
              <FaLinkedinIn color='white' />
            </a>
            <a
              href={twitter}
              target='_blank'
              rel='noreferrer'
              aria-label='Twitter'
            >
              <FaTwitter color='white' />
            </a>
          </SocialsWrap>
        </LogoWrap>
        <SmallPrint>
          <p>{copyright}</p>
        </SmallPrint>
      </InnerWrap>
    </Container>
  );
};

const query = graphql`
  query {
    contentfulSiteData {
      twitter
      linkedIn
      copyright
    }
    contentfulHero {
      header
    }
  }
`;

export default Footer;
