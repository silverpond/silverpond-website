// @flow
// Imports - config
import React from 'react';
import { type } from '../lib/settings';

import Section from '../components/Section';

const headings = ['h1', 'h2', 'h3', 'h4', 'h5'];

// Component
const About = () => {
  return (
    <Section size="small">
      {headings.map(heading => {
        const Component = heading;
        return (
          <Component style={{ ...type[heading], marginBottom: '1.5rem' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            enim mi, vulputate nec tincidunt quis, finibus id ex. Quisque
          </Component>
        );
      })}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        enim mi, vulputate nec tincidunt quis, finibus id ex. Quisque
        venenatis rhoncus odio, eu ornare tortor pretium sit amet. Sed
        tincidunt maximus felis a dictum. Donec eu vestibulum sapien. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse enim
        mi, vulputate nec tincidunt quis, finibus id ex. Quisque venenatis
        rhoncus odio, eu ornare tortor pretium sit amet. Sed tincidunt
        maximus felis a dictum. Donec eu vestibulum sapien.
      </p>
      <small>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        enim mi, vulputate nec tincidunt quis, finibus id ex. Quisque
        venenatis rhoncus odio, eu ornare tortor pretium sit amet. Sed
        tincidunt maximus felis a dictum. Donec eu vestibulum sapien. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse enim
        mi, vulputate nec tincidunt quis, finibus id ex. Quisque venenatis
        rhoncus odio, eu ornare tortor pretium sit amet. Sed tincidunt
        maximus felis a dictum. Donec eu vestibulum sapien.
      </small>
    </Section>
  );
};

export default About;
