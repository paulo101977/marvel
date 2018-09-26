import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Container from '../container';
import Button from '../buttons';
import { Col12 , Col6 } from '.';

storiesOf('Atoms/Col', module)
  .add('grid12 with container and button and text', () => (
    <Container>
      <Col12>
        <Button onClick={action('clicked')}>Hello Button</Button>
        <Button onClick={action('clicked')}>Hello Button 2</Button>
      </Col12>
    </Container>
  )).add('grid 6 with container and button and text', () => (
    <Container>
      <Col6>
        <Button onClick={action('clicked')}>Hello Button</Button>
        <Button onClick={action('clicked')}>Hello Button 2</Button>
      </Col6>
      <Col6>
        <Button onClick={action('clicked')}>Hello Button</Button>
        <Button onClick={action('clicked')}>Hello Button 2</Button>
      </Col6>
    </Container>
  ));