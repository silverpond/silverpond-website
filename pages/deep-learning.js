// @flow
// Imports - config
import React from 'react';
import styled from 'styled-components';

import IntroText from '../components/IntroText';
import MastHead from '../components/MastHead';
import Section from '../components/Section';
import InfoSection from '../components/InfoSection';
import StartProjectBanner from '../components/StartProjectBanner';

const Intro = styled(IntroText)`
  margin-bottom: 5rem;
  max-width: 700px;
`;

// Component
const DeepLearning = () => {
  return (
    <div>
      <MastHead title="Deep learning" subTitle="All about our deep learning" />

      <Section>
        <Intro>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          enim mi, vulputate nec tincidunt quis, finibus id ex. Quisque
          venenatis rhoncus odio, eu ornare tortor pretium sit amet. Sed
          tincidunt maximus felis a dictum. Donec eu vestibulum sapien. Ut
          tempus id enim ut auctor. Suspendisse congue lacus ultrices tellus
          faucibus semper. pretium sit amet. Sed tincidunt maximus felis a
          dictum. Donec eu vestibulum sapien. Ut tempus id enim ut auctor.
          Suspendisse congue lacus ultrices tellus faucibus semper.
        </Intro>
      </Section>

      <InfoSection
        title="Computer vision"
        color="grey"
        image="/images/computer-vision.png"
        imageDescription="Amazing example of computer vision"
        caseStudy={{
          title: 'Deep learning in the power industry',
          link: '/case-studies/powercor/',
        }}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              enim mi, vulputate nec tincidunt quis, finibus id ex. Quisque
              venenatis rhoncus odio, eu ornare tortor pretium sit amet. Sed
              tincidunt maximus felis a dictum. Donec eu vestibulum sapien. Ut
              tempus id enim ut auctor. Suspendisse congue lacus ultrices tellus
              faucibus semper. pretium sit amet."
      />

      <InfoSection
        reversed
        title="Natural language processing"
        image="/images/computer-vision.png"
        imageDescription="Amazing example of computer vision"
        caseStudy={{
          title: 'Deep learning in the power industry',
          link: '/case-studies/powercor/',
        }}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              enim mi, vulputate nec tincidunt quis, finibus id ex. Quisque
              venenatis rhoncus odio, eu ornare tortor pretium sit amet. Sed
              tincidunt maximus felis a dictum. Donec eu vestibulum sapien. Ut
              tempus id enim ut auctor. Suspendisse congue lacus ultrices tellus
              faucibus semper. pretium sit amet."
      />

      <InfoSection
        title="Pattern recognition"
        color="grey"
        image="/images/computer-vision.png"
        imageDescription="Amazing example of computer vision"
        caseStudy={{
          title: 'Deep learning in the power industry',
          link: '/case-studies/powercor/',
        }}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              enim mi, vulputate nec tincidunt quis, finibus id ex. Quisque
              venenatis rhoncus odio, eu ornare tortor pretium sit amet. Sed
              tincidunt maximus felis a dictum. Donec eu vestibulum sapien. Ut
              tempus id enim ut auctor. Suspendisse congue lacus ultrices tellus
              faucibus semper. pretium sit amet."
      />

      <InfoSection
        reversed
        title="Reinforcement learning"
        image="/images/computer-vision.png"
        imageDescription="Amazing example of computer vision"
        caseStudy={{
          title: 'Deep learning in the power industry',
          link: '/case-studies/powercor/',
        }}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              enim mi, vulputate nec tincidunt quis, finibus id ex. Quisque
              venenatis rhoncus odio, eu ornare tortor pretium sit amet. Sed
              tincidunt maximus felis a dictum. Donec eu vestibulum sapien. Ut
              tempus id enim ut auctor. Suspendisse congue lacus ultrices tellus
              faucibus semper. pretium sit amet."
      />

      <StartProjectBanner />
    </div>
  );
};

export default DeepLearning;
