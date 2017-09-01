// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';

import Helmet from 'components/Helmet';
import IntroText from 'components/IntroText';
import MastHead from 'components/MastHead';
import Section from 'components/Section';
import TextContent from 'components/TextContent';

const Content = styled.div`
  margin: 0 auto;
  max-width: 768px;
`;

// Component
const ThePond = () => {
  return (
    <div>
      <Helmet title="The Pond" />
      <MastHead title="The Pond" subTitle="A Data Science and Machine Learning Coworking Space" />
      <Section>
        <Content>
          <TextContent>
            <p>Hi there and welcome to the Pond!</p>
            <p>
              We're a community of creatives, data scientists, machine learning enthusiasts,
              functional programmers and all-round friendly people.
            </p>
            <p>
              Silverpond wanted to grow the data science and machine learning community in
              Melbourne, and with this in mind we’ve set up a collaborative workspace in McKillop St
              right in the heart of Melbourne CBD with high speed fibre (and WiFi) and close to
              great cafes and leafy trees!
            </p>
            <p>
              We have an opportunity for innovative freelancers or small teams doing cool things in
              data science and machine learning to work in and contribute to our space, right in the
              heart of the city.
            </p>
            <p>
              If you're interested in contributing to a inclusive and collaborative work space which
              is more than just an office, we would love for you to come and join us.
            </p>
            <p>
              While we’re still finishing the space, why not come trial it for a week for free
              during October/November!
            </p>
            <p>To find out more about a free week, get in touch or just drop by for a visit.</p>

            <h3>Features</h3>
            <ul>
              <li>$600 per month</li>
              <li>24/7 access</li>
              <li>Allocated desk</li>
              <li>Printing</li>
              <li>High speed fibre wifi - 50mbps</li>
              <li>Use of meeting room and projector</li>
              <li>Use of business address</li>
              <li>Community events</li>
              <li>Weekly yoga</li>
            </ul>

            <h3>Community</h3>
            <p>The following user groups meet in our space:</p>
            <ul>
              <li>
                <a href="http://silverpond.com.au/the_pond/www.meetup.com/Melbourne-Functional-User-Group-MFUG">
                  Melbourne Functional Users Group
                </a>
              </li>
              <li>
                <a href="http://www.meetup.com/Melbourne-Haskell-Users-Group">
                  Melbourne Haskell Users Group
                </a>
              </li>
              <li>
                <a href="http://www.meetup.com/clj-melb">Melbourne Clojure Users Group</a>
              </li>
              <li>
                <a href="http://www.meetup.com/Machine-Learning-AI-Meetup/">
                  Melbourne Machine Learning and AI Users Group
                </a>
              </li>
              <li>
                <a href="https://www.meetup.com/Rust-Melbourne/">Rust Melbourne</a>
              </li>
              <li>
                <a href="http://www.meetup.com/The-Melbourne-Maths-and-Science-Meetup/">
                  Melbourne Maths and Science Meetup
                </a>
              </li>
            </ul>
          </TextContent>
        </Content>
      </Section>
    </div>
  );
};

export default ThePond;
