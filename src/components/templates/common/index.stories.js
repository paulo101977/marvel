import React from 'react';
import { storiesOf } from '@storybook/react';

import { ThemeProvider  } from 'styled-components';

import Template from '.';

import theme from '../../../stylus/light';

import ListItem from '../../molecules/list-item';

import ItemsContainer from '../../organisms/items-container';

const headerConfig = {
  headerTitle: 'Mytitle',
  idComp: 1,
  labelText: 'label',
  placeholder: 'placeholder',
  buttonText: 'btn',
  filterText: 'filter',
  isLine: true,
  hasSearch: true
}

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
};

storiesOf('Templates/Common', module)
  .add('without content', () => (
    <ThemeProvider theme={theme}>
      <Template {...headerConfig}></Template>
    </ThemeProvider>
  )).add('with simple content', () => (
    <ThemeProvider theme={theme}>
      <Template {...headerConfig}>
        <div>
          Simple content
        </div>
      </Template>
    </ThemeProvider>
  )).add('with simple complex content', () => (
    <ThemeProvider theme={theme}>
      <Template {...headerConfig}>
        <ListItem { ...itemConfig }/>
      </Template>
    </ThemeProvider>
  )).add('with items container', () => (
    <ThemeProvider theme={theme}>
      <Template {...headerConfig}>
        <ItemsContainer itemsList={ allItems() } />
      </Template>
    </ThemeProvider>
  ));

  //ItemsContainer