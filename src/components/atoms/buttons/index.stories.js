import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, ButtonPrimary, ButtonSecondary } from '.';

import { ThemeProvider  } from 'styled-components';

import theme from '../../../stylus/light';

storiesOf('Atoms/Button', module)
  .add('with text', () => (
    <ThemeProvider theme={theme}>
      <Button onClick={action('clicked')}>Hello Button</Button>
    </ThemeProvider>
  )).add('primary', () => (
    <ThemeProvider theme={theme}>
      <ButtonPrimary onClick={action('clicked')}>Hello Button</ButtonPrimary>
    </ThemeProvider>
  )).add('seconndary', () => (
    <ThemeProvider theme={theme}>
      <ButtonSecondary onClick={action('clicked')}>Hello Button</ButtonSecondary>
    </ThemeProvider>
  ));