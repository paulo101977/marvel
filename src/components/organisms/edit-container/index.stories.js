import React from 'react';
import { storiesOf } from '@storybook/react';

import { ThemeProvider  } from 'styled-components';

import EditContainer from '.';

import theme from '../../../stylus/light';

import { Container } from '../../atoms/container'


storiesOf('Organisms/EditContainer', module)
  .add('case empty', () => (
    <ThemeProvider theme={theme}>
      <Container bg="black">
        <EditContainer />
      </Container>
    </ThemeProvider>
  )).add('with item', () => (
    <ThemeProvider theme={theme}>
      <EditContainer />
    </ThemeProvider>
  ));