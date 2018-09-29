import React from 'react';
import { storiesOf } from '@storybook/react';
import { Toggle } from '.';
import { Container } from '../../atoms/container'

import { ThemeProvider  } from 'styled-components';

import theme from '../../../stylus/light';

storiesOf('Molecules/Toggle', module)
  .add('default', () => (
      <Toggle />
  )).add('with theme', () => (
    <ThemeProvider theme={theme}>
      <Container bg="black">
        <Toggle />
      </Container>
    </ThemeProvider>
  ));