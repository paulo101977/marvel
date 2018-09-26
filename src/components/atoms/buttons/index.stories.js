import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, ButtonPrimary, ButtonDanger, ButtonAlert, ButtonSuccess } from '.';

storiesOf('Atoms/Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  )).add('primary', () => (
    <ButtonPrimary onClick={action('clicked')}>Hello Button</ButtonPrimary>
  )).add('danger', () => (
    <ButtonDanger onClick={action('clicked')}>Hello Button</ButtonDanger>
  )).add('alert', () => (
    <ButtonAlert onClick={action('clicked')}>Hello Button</ButtonAlert>
  )).add('success', () => (
    <ButtonSuccess onClick={action('clicked')}>Hello Button</ButtonSuccess>
  ))
  .add('full', () => (
    <Button isFull onClick={action('clicked')}>Hello Button</Button>
  ));