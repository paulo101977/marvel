import React from 'react';
import { storiesOf } from '@storybook/react';
import Container from '../container';


import Row from '../row';

import { Col, Col6 } from '../col';

import { Img, ImgResponsive, ImgThumb, ImgMini } from '.'


storiesOf('Atoms/Images', module)
  .add('default img', () => (
    <Container>
      <Row>
        <Col>
          <Img src="https://terrigen-cdn-dev.marvel.com/content/prod/2x/marvels-spider-man-screen-04-ps4-us-30mar18.jpeg" />
        </Col>
      </Row>
    </Container>
  )).add('responsive', () => (
    <Container>
      <Row>
        <Col6>
          <ImgResponsive src="https://terrigen-cdn-dev.marvel.com/content/prod/2x/marvels-spider-man-screen-04-ps4-us-30mar18.jpeg" />
        </Col6>
      </Row>
    </Container>
  )).add('thumb', () => (
    <Container>
      <Row>
        <Col6>
          <ImgThumb src="https://terrigen-cdn-dev.marvel.com/content/prod/2x/marvels-spider-man-screen-04-ps4-us-30mar18.jpeg" />
        </Col6>
      </Row>
    </Container>
  )).add('mini', () => (
    <Container>
      <Row>
        <Col6>
          <ImgMini src="https://terrigen-cdn-dev.marvel.com/content/prod/2x/marvels-spider-man-screen-04-ps4-us-30mar18.jpeg" />
        </Col6>
      </Row>
    </Container>
  ));