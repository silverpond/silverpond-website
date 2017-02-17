// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';
import { prefixLink } from 'gatsby-helpers';
import { palette, type, typeStyles } from '../lib/settings';

import InnerBase from '../components/Inner';
import LogoLink from '../components/LogoLink';
import Nav from '../components/Nav';
import TextLink from '../components/TextLink';

const Container = styled.div`
  background-color: ${palette.slate.base};
  color: white;
  padding: 4rem 0 6rem;
`;

const Aside = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Inner = styled(InnerBase)`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled(LogoLink)`
  margin-bottom: 1.5rem;
`;

const Address = styled.p`
  margin: 0 0 3rem;
`;

const Contact = styled.p`
  color: ${palette.grey.base};
  margin: 1rem 0;

  & span:first-child {
    display: inline-block;
    min-width: 60px;
  }

  & span:last-child {
    ${typeStyles('h4')};
    color: white;
    font-weight: ${type.weights.normal};
  }
`;

const EmailLink = styled(TextLink)`
  ${typeStyles('h4')};
  color: white;
  font-weight: ${type.weights.normal};

  &:after {
    bottom: 5px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  margin-top: 4rem;

  & > * + * {
    margin-left: 1rem;
  }
`;

const SocialLink = styled.a`
  background: url('/images/icons/${props => props.icon}.svg') no-repeat center;
  display: block;
  width: 2rem;
  height: 2rem;
  background-size: contain;`;

// Component
const Footer = () => {
  return (
    <Container>
      <Inner>

        <div>
          <Logo to={prefixLink('/')} onDark />
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
            <span>
              Phone
            </span>
            <span>
              (03) 9008 5922
            </span>
          </Contact>
          <Contact>
            <span>
              Email
            </span>
            <EmailLink to="mailto:hello@silverpond.com.au">
              hello@silverpond.com.au
            </EmailLink>
          </Contact>
          <SocialLinks>
            <SocialLink
              icon="twitter"
              href="https://twitter.com/SilverpondDev"
            />
            <SocialLink
              icon="linkedin"
              href="https://www.linkedin.com/company/silverpond-pty-ltd"
            />
          </SocialLinks>
        </div>

        <Aside>
          <Nav style={{ flexShrink: 0, marginBottom: '2rem' }} white />
          <div />
        </Aside>

      </Inner>
    </Container>
  );
};

export default Footer;
