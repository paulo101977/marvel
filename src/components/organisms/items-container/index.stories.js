import React from 'react';
import { storiesOf } from '@storybook/react';

import { ThemeProvider  } from 'styled-components';

import ItemsContainer from '.';

import theme from '../../../stylus/light';

import { Container } from '../../atoms/container'

const items = [];

const allItems = () => { 
  for(let x = 0; x < 10; x++){
    items.push({
      src:"https://terrigen-cdn-dev.marvel.com/content/prod/2x/marvels-spider-man-screen-04-ps4-us-30mar18.jpeg",
      editText:"Edit",
      seeText:"View",
    })
  }

  return items;
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
      <ItemsContainer itemsList={ allItems() }/>
    </ThemeProvider>
  ));