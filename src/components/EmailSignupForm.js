// @flow
/* eslint-disable react/no-unescaped-entities */
// Imports - config
import React from 'react';
import styled from 'styled-components';

import { breakpoints, palette } from 'lib/settings';

import Button from 'components/Button';
import { ColWrapper, Col } from 'components/Grid';

// Styled components
const Title = styled.h3`margin-bottom: 0.5rem;`;

const Text = styled.p`margin: 0 0 2rem;`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  @mixin (min-width: ${breakpoints.small}) {
    flex-direction: row;
  }

  button {
    width: 100%;
  }
`;

const InputWrapper = styled.div`@media (min-width: ${breakpoints.small}) {padding-right: 2rem;}`;

const Input = styled.input`
  background-color: ${palette.slate.light};
  border-radius: 3px;
  border: 0;
  color: white;
  flex-grow: 1;
  padding: 1rem;
  width: 100%;

  &::-webkit-input-placeholder {
    color: ${palette.slate.lighter};
  }
`;

const BotBaitField = styled.input`
  position: absolute;
  left: -5000px;
`;

// Component
const EmailSignupForm = () => {
  return (
    <div>
      <Title>Join the Silverpond mailing list</Title>
      <Text>
        Stay up to date with the most interesting deep learning articles we've been reading.
      </Text>
      <Form
        action="//silverpond.us13.list-manage.com/subscribe/post?u=af7133600d742ed0346eaf58b&amp;id=ccc8026de5"
        name="mc-embedded-subscribe-form"
        target="_blank"
        method="post"
      >
        <ColWrapper>
          <Col span={8} style={{ padding: 0 }}>
            <InputWrapper>
              <Input placeholder="your.email@example.com" name="EMAIL" type="email" />
              <BotBaitField
                aria-hidden="true"
                type="text"
                name="b_af7133600d742ed0346eaf58b_ccc8026de5"
                tabindex="-1"
                value=""
              />
            </InputWrapper>
          </Col>
          <Col span={4} style={{ padding: 0 }}>
            <Button color="white" hasArrow>
              Sign up
            </Button>
          </Col>
        </ColWrapper>
      </Form>
    </div>
  );
};

export default EmailSignupForm;
