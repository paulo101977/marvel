import React from 'react';
import { storiesOf } from '@storybook/react';

import { ThemeProvider  } from 'styled-components';

import ItemsContainer from '.';

import theme from '../../../stylus/light';

import { Container } from '../../atoms/container'

const allItems = () => { 
  
};

storiesOf('Organisms/ItemsContainer', module)
  .add('case empty', () => (
    <ThemeProvider theme={theme}>
      <Container bg="black">
        <ItemsContainer />
      </Container>
    </ThemeProvider>
  )).add('with items', () => (
    <ThemeProvider theme={theme}>
      <ItemsContainer />
    </ThemeProvider>
  ));