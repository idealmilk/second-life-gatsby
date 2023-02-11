import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { FaLinkedinIn, FaTwitter } from 'react-icons/fa';

import { LogoWhite } from 'assets/Logos';
import { ContactModal } from 'components';
import { ContactForm, EmailForm } from 'components/common/Forms';
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

  const [email, setEmail] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <Container>
      <InnerWrap>
        <Content>
          <FormWrap>
            <h3>{header}</h3>
            <EmailForm
              setEmailCallback={setEmail}
              toggleModalOpen={handleModalOpen}
            />
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
      {modalOpen && (
        <ContactModal parentCallback={handleModalOpen}>
          <h2>Book your consultation</h2>
          <ContactForm
            givenEmail={email}
            contactType='Consultation'
            clickOrigin='Footer'
          />
        </ContactModal>
      )}
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
