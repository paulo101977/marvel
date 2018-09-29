import React from 'react';
import { storiesOf } from '@storybook/react';
import { Span } from '.';
import { Container } from '../container'

import { ThemeProvider  } from 'styled-components';

import theme from '../../../stylus/light';

storiesOf('Atoms/Span', module)
  .add('default', () => (
      <Span>Hello Button</Span>
  )).add('with theme', () => (
    <ThemeProvider theme={theme}>
      <Container bg="black">
        <Span>Hello Button</Span>
      </Container>
    </ThemeProvider>
  ));