import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Container from '../container';
import Button from '../buttons';
import Row from '.';

import { Col12, Col6 } from '../col';

storiesOf('Atoms/Row', module)
  .add('with two items in two lines', () => (
    <Container>
      <Row>
        <Col12>
          <Button onClick={action('clicked')}>Hello Button</Button>
        </Col12>
        <Col12>
          <Button onClick={action('clicked')}>Hello Button 2</Button>
        </Col12>
      </Row>
    </Container>
  )).add('with two items in one line', () => (
    <Container>
      <Row>
        <Col6>
          <Button onClick={action('clicked')}>Hello Button</Button>
        </Col6>
        <Col6>
          <Button onClick={action('clicked')}>Hello Button 2</Button>
        </Col6>
      </Row>
    </Container>
  ));