import React from 'react';
import { storiesOf } from '@storybook/react';

import { ThemeProvider  } from 'styled-components';

import { HomePage } from '.';

import theme from '../../../stylus/light';

import superagent from 'superagent';

const itemConfig = {
    src:"https://terrigen-cdn-dev.marvel.com/content/prod/2x/marvels-spider-man-screen-04-ps4-us-30mar18.jpeg",
    editText:"Edit",
    seeText:"View"
}
  
const items = [];

const allItems = () => { 
    for(let x = 0; x < 10; x++){
        items.push(itemConfig)
    }

    return items;
}

const loadData = () => {

}

storiesOf('Pages/HomePage', module)
  .add('with content static', () => (
    <ThemeProvider theme={theme}>
      <HomePage data={allItems()} />
    </ThemeProvider>
  ));

  //ItemsContainer