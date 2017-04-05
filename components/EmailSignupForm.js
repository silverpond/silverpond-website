// @flow
/* eslint-disable react/no-unescaped-entities */
// Imports - config
import React from 'react';
import styled from 'styled-components';
import { palette } from '../lib/settings';
import { media } from '../lib/style-utils';

import Button from '../components/Button';

// Styled components
const Title = styled.h3`
  margin-bottom: .5rem;
`;

const Text = styled.p`
  margin: 0 0 2rem;
`;

const Form = styled.form`
  display: flex;
${media.extrasmall`
  flex-direction: column;
`}
`;

const Input = styled.input`
  backgroundColor: ${palette.slate.light};
  border-radius: 3px;
  border: 0;
  color: white;
  flex-grow: 1;
  margin-right: 3rem;
  padding: 0 2rem;

  &::-webkit-input-placeholder {
  color: white;
  }

  ${media.extrasmall`
    padding: 1rem;
    margin-bottom: 3rem;
    margin-right: 0;
  `}
`;

const BotBaitField = styled.input`
  position: absolute;
  left: -5000px;
`;

// Component
const EmailSignupForm = () => {
  return (
    <div>
      <Title>
        Join the Silverpond mailing list
      </Title>
      <Text>
        Stay up to date with the most interesting deep learning articles we've been reading.
      </Text>
      <Form
        action="//silverpond.us13.list-manage.com/subscribe/post?u=af7133600d742ed0346eaf58b&amp;id=ccc8026de5"
        name="mc-embedded-subscribe-form"
        target="_blank"
        method="post"
      >

        <Input placeholder="your.email@example.com" name="EMAIL" type="email" />
        <BotBaitField
          aria-hidden="true"
          type="text"
          name="b_af7133600d742ed0346eaf58b_ccc8026de5"
          tabindex="-1"
          value=""
        />

        <Button color="white" hasArrow>
          Sign up
        </Button>
      </Form>
    </div>
  );
};

export default EmailSignupForm;
