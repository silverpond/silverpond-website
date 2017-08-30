/* global FileReader, Image, FormData */
// Imports - config
import React from 'react';
import fetch from 'isomorphic-fetch';
import styled, { keyframes } from 'styled-components';
import pluralize from 'pluralize';
import { chunk } from 'lodash';

import { type, typeStyles, palette } from 'lib/settings';

import Button from 'components/Button';
import MastHead from 'components/MastHead';
import Section from 'components/Section';
import FileInput from 'components/FileInput';
import { ColWrapper, Col } from 'components/Grid';

const List = styled.ul`
  & > * + * {
    margin-top: 0.5rem;
  }
`;

const Controls = styled(ColWrapper)`
  align-items: flex-end;
  margin-top: 4rem;
`;

const Label = styled.p`
  ${typeStyles('small')} font-weight: ${type.weights.medium};
  margin-bottom: 1rem;
`;

const RangeContainer = styled.div`
  align-items: center;
  display: flex;
`;

const RangeInput = styled.input`
  display: block;
  height: 3.5rem;
`;

const RangeValue = styled.p`margin: 0 0 0 2rem;`;

const ImageContainer = styled.div`
  align-items: center;
  background-color: ${palette.grey.light};
  border-radius: 0.5rem;
  border: dashed 3px ${palette.grey.base};
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  min-height: 15rem;
  padding: 1rem;
`;

const Prompt = styled.h3`color: ${palette.grey.base};`;

const Svg = styled.svg`flex-grow: 1;`;

const appear = keyframes`
  0% {
    transform: translateY(20rem) scale(.5);
    opacity: 0;
  }

  60% {
    transform: translateY(-1rem) scale(1.025);
    opacity: 1;
  }

  80% {
    transform: translateY(.5rem) scale(.975);
    opacity: 1;
  }

  90% {
    transform: translateY(-.25rem) scale(1);
    opacity: 1;
  }

  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
`;

const Rect = styled.rect`
  animation: ${appear} 0.6s ease-out;
  fill: rgba(255, 192, 203, 0.5);
  shape-rendering: crispEdges;
  stroke-width: 3px;
  stroke: pink;
  transform-origin: bottom;
  vector-effect: non-scaling-stroke;
`;

const SegmentRow = styled(ColWrapper)`margin-top: 3rem;`;

// Component
class ObjectDetectionDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      image: undefined,
      imageDataUrl: undefined,
      imageHeight: undefined,
      imageWidth: undefined,
      isProcessing: false,
      message: '',
      results: [],
      threshold: 50,
    };
  }

  handleFileChange = e => {
    const fr = new FileReader();
    const image = new Image();
    const file = e.target.files[0];

    fr.readAsDataURL(file);

    fr.onload = frEvent => {
      const result = frEvent.target.result;
      image.src = result;

      image.onload = () => {
        this.setState({
          image: file,
          imageDataUrl: result,
          imageHeight: image.height,
          imageWidth: image.width,
          results: [],
        });
      };
    };
  };

  handleThresholdChange = e => {
    this.setState({ threshold: e.target.value });
  };

  handleUpload = () => {
    const formData = new FormData();
    formData.append('image', this.state.image);
    this.setState({
      isProcessing: true,
      message: 'Processing...',
      results: [],
    });

    fetch(`http://54.66.149.233/multiobject?threshold=${this.state.threshold}`, {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(json =>
        this.setState({
          isProcessing: false,
          message: `${pluralize('object', json.length, true)} found`,
          results: json,
        }),
      );
  };

  render() {
    return (
      <div>
        <MastHead title="Deep Learning Object Detector Demo" subTitle="Just a wonderful demo!" />

        <Section size="small">
          <p>
            We’ve used <a href="/deeplearning.html">deep learning</a> to build an object detector on
            the <a href="http://host.robots.ox.ac.uk/pascal/VOC/">PASCAL VOC dataset</a>
            .
          </p>
          <p>The detector is trained to recognise 20 different types of objects:</p>
          <List>
            <li>
              <strong>Person:</strong> person
            </li>
            <li>
              <strong>Animal:</strong> bird, cat, cow, dog, horse, sheep
            </li>
            <li>
              <strong>Vehicle:</strong> aeroplane, bicycle, boat, bus, car, motorbike, train
            </li>
            <li>
              <strong>Indoor:</strong> bottle, chair, dining table, potted plant, sofa, tv/monitor
            </li>
          </List>
          <p>
            If you provide an image containing some of these objects, the network should localise
            them!
          </p>
          <p>
            <em>Note: Please keep images below 2 MB in size.</em>
          </p>

          <Controls>
            <Col>
              <Label>IMAGE TO PROCESS</Label>
              <FileInput onChange={this.handleFileChange} />
            </Col>
            <Col>
              <Label>THRESHOLD FOR PROBABILITY</Label>
              <RangeContainer>
                <RangeInput
                  type="range"
                  min="10"
                  max="100"
                  value={this.state.threshold}
                  onChange={this.handleThresholdChange}
                />
                <RangeValue>{this.state.threshold}%</RangeValue>
              </RangeContainer>
            </Col>
            <Col>
              <Button onClick={this.handleUpload} hasArrow isLoading={this.state.isProcessing}>
                Detect!
              </Button>
            </Col>
          </Controls>

          <ImageContainer>
            {this.state.image ? (
              <Svg viewBox={`0 0 ${this.state.imageWidth} ${this.state.imageHeight}`}>
                <image href={this.state.imageDataUrl} />
                {this.state.results.map(result => {
                  const { bbox: [x1, y1, x2, y2] } = result;
                  return (
                    <Rect key={result} fill="none" height={y2 - y1} width={x2 - x1} x={x1} y={y1} />
                  );
                })}
              </Svg>
            ) : (
              <Prompt>Choose a file to get started!</Prompt>
            )}
          </ImageContainer>

          <p>{this.state.message}</p>

          {chunk(this.state.results, 3).map(row => {
            return (
              <SegmentRow key={row}>
                {row.map(result => {
                  const { bbox: [x1, y1, x2, y2], class: clazz } = result;
                  return (
                    <Col span="4" key={result}>
                      <p>{`class: ${clazz}`}</p>
                      <Svg viewBox={`${x1} ${y1} ${x2 - x1} ${y2 - y1}`}>
                        <image href={this.state.imageDataUrl} />
                      </Svg>
                    </Col>
                  );
                })}
              </SegmentRow>
            );
          })}
        </Section>
      </div>
    );
  }
}

export default ObjectDetectionDemo;
