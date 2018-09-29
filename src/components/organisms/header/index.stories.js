import React from 'react';
import { storiesOf } from '@storybook/react';

import { ThemeProvider  } from 'styled-components';

import Header from '.';

import theme from '../../../stylus/light';

const filterText = (value) => { 
  console.log('clicked', value);
};

storiesOf('Organisms/Header', module)
  .add('with function submit', () => (
    <ThemeProvider theme={theme}>
      <Header 
        isLine
        headerTitle="Title"
        hasSearch={ true }
        idComp="12"
        labelText=""
        placeholder="My placeholder"
        buttonText="search"
        filterText={(value) => filterText(value)}
        />
    </ThemeProvider>
  )).add('without search bar', () => (
    <ThemeProvider theme={theme}>
      <Header 
        isLine
        headerTitle="Title"
        />
    </ThemeProvider>
  ));