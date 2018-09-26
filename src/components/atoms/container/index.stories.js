import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Container from '.';
import Button from '../buttons';

storiesOf('Atoms/Container', module)
  .add('with button and text', () => (
    <Container>
      <Button onClick={action('clicked')}>Hello Button</Button>
      <Button onClick={action('clicked')}>Hello Button 2</Button>
    </Container>
  ));