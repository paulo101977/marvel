import React from 'react';
import { storiesOf } from '@storybook/react';

import Container from '../../atoms/container'
import Title from '.';


import { ThemeProvider  } from 'styled-components';

import theme from '../../../stylus/light';

storiesOf('Atoms/Title', module)
  .add('default items with theme', () => (
    <ThemeProvider theme={theme}>
      <Container bg="black">
        <Title.H1>Test</Title.H1>
        <Title.H2>Test</Title.H2>
        <Title.H3>Test</Title.H3>
        <Title.H4>Test</Title.H4>
        <Title.H5>Test</Title.H5>
        <Title.H6>Test</Title.H6>
      </Container>
  </ThemeProvider>
  )).add('default items without theme', () => (
    <Container>
      <Title.H1>Test</Title.H1>
      <Title.H2>Test</Title.H2>
      <Title.H3>Test</Title.H3>
      <Title.H4>Test</Title.H4>
      <Title.H5>Test</Title.H5>
      <Title.H6>Test</Title.H6>
    </Container>
  ));
