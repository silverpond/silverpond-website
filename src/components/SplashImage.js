// @flow
import React from 'react';
import styled from 'styled-components';

import { settings as mastHeadSettings } from 'components/MastHead';

const Container = styled.div`
  background-image: url('${props => props.src}');
  background-size: cover;
  display: block;
  height: ${mastHeadSettings.height};
  position: relative;
  width: 100%;
`;

const Overlay = styled.div`
  background-color: ${props => props.overlay};
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const Splash = ({ overlay, src }: { overlay?: string, src: string }) => {
  return <Container src={src}>{overlay && <Overlay overlay={overlay} />}</Container>;
};

export default Splash;
