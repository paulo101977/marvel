import React from 'react';
import { storiesOf } from '@storybook/react';
import { Label } from '.';
import { Container } from '../container'

import { ThemeProvider  } from 'styled-components';

import theme from '../../../stylus/light';

storiesOf('Atoms/Label', module)
  .add('default', () => (
      <Label>Hello Button</Label>
  )).add('with theme', () => (
    <ThemeProvider theme={theme}>
      <Container bg="black">
        <Label>Hello Button</Label>
      </Container>
    </ThemeProvider>
  ));