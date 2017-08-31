// @flow
import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import { palette, type, typeStyles } from 'lib/settings';

import EmailSignupForm from 'components/EmailSignupForm';
import { Col, ColWrapper } from 'components/Grid';
import InnerBase from 'components/Inner';
import LogoLink from 'components/LogoLink';
import SocialLink from 'components/SocialLink';
import TextLink from 'components/TextLink';

const textColor = 'rgba(255, 255, 255, 0.9)';

// relative position to cover overflow from fixed MastHead element
const Container = styled.div`
  background-color: ${palette.slate.base};
  color: ${textColor};
  padding: 2rem;
  position: relative;

  @media (min-width: 768px) {
    padding: 2rem 4rem 4rem;
  }
`;

const Logo = styled(LogoLink)`margin-bottom: 1.5rem;`;

const Address = styled.p`margin: 0 0 2rem;`;

const Contact = styled.p`
  color: ${palette.grey.base};
  margin: 1rem 0;

  & span:first-child {
    display: inline-block;
    min-width: 60px;
  }

  & span:last-child {
    ${typeStyles('h4')};
    color: ${textColor};
    font-weight: ${type.weights.normal};
  }
`;

const EmailLink = styled(TextLink)`
  ${typeStyles('h4')};
  color: ${textColor};
  font-weight: ${type.weights.normal};

  &:after {
    bottom: 4px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  margin-top: 2.5rem;

  & > * + * {
    margin-left: 1rem;
  }
`;

const NavContainer = styled.ul`
  border-bottom: 2px solid ${palette.slate.light};
  display: block;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  text-align: center;
`;

const NavItem = styled.li`
  color: ${textColor};
  display: block;
  font-weight: ${type.weights.medium};
  line-height: 3rem;
  margin: 0 2rem;
  text-align: center;

  @media (min-width: 768px) {
    display: inline-block;
    line-height: 1.5;
  }
`;

const navItems = [
  { name: 'Articles', link: '/articles' },
  { name: 'Clients', link: '/clients' },
  { name: 'Coworking', link: '/the-pond' },
  { name: 'Deep Learning', link: '/deep-learning' },
  { name: 'Events', link: '/events' },
  { name: 'Workshops', link: '/workshops' },
];

// Component
const Footer = () => {
  return (
    <Container id="footer">
      <NavContainer>
        {navItems.map(item => (
          <NavItem key={item.name}>
            <Link to={item.link}>{item.name}</Link>
          </NavItem>
        ))}
      </NavContainer>
      <ColWrapper style={{ alignItems: 'center' }}>
        <Col span="4" style={{ paddingTop: '1rem' }}>
          <Logo to="/" />
          <Address>
            Level 2
            <br />
            382 Little Collins Street
            <br />
            Melbourne VIC, 3000
            <br />
            <br />
            Enter via McKillop Street
          </Address>
          <Contact>
            <span>Phone</span>
            <span>(03) 9008 5922</span>
          </Contact>
          <Contact>
            <span>Email</span>
            <EmailLink to="mailto:hello@silverpond.com.au">hello@silverpond.com.au</EmailLink>
          </Contact>
          <SocialLinks>
            <SocialLink icon="twitter" href="https://twitter.com/SilverpondDev" />
            <SocialLink
              icon="linkedin"
              href="https://www.linkedin.com/company/silverpond-pty-ltd"
            />
          </SocialLinks>
        </Col>
        <Col span="8">
          <EmailSignupForm />
        </Col>
      </ColWrapper>
    </Container>
  );
};

export default Footer;
