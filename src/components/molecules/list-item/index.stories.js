import React from 'react';
import { storiesOf } from '@storybook/react';

import Container from '../../atoms/container'
import ListItem from '.';


import { ThemeProvider  } from 'styled-components';

import theme from '../../../stylus/light';

storiesOf('Molecules/ListItem', module)
  .add('default list item', () => (
    <ThemeProvider theme={theme}>
      <Container>
        <ListItem 
          src="https://terrigen-cdn-dev.marvel.com/content/prod/2x/marvels-spider-man-screen-04-ps4-us-30mar18.jpeg"
          editText="Edit"
          seeText="View"
        />
      </Container>
  </ThemeProvider>
  ));
