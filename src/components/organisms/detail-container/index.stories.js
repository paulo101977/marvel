import React from 'react';
import { storiesOf } from '@storybook/react';

import { ThemeProvider  } from 'styled-components';

import DetailContainer from '.';

import theme from '../../../stylus/light';

import { Container } from '../../atoms/container'


storiesOf('Organisms/DetailContainer', module)
  .add('case empty', () => (
    <ThemeProvider theme={theme}>
      <Container bg="black">
        <DetailContainer />
      </Container>
    </ThemeProvider>
  )).add('with item', () => (
    <ThemeProvider theme={theme}>
      <DetailContainer />
    </ThemeProvider>
  ));