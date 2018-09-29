import React from 'react';
import { storiesOf } from '@storybook/react';

import Container from '../../atoms/container'
import Card from '.';


import { ThemeProvider  } from 'styled-components';

import theme from '../../../stylus/light';

storiesOf('Molecules/Card', module)
  .add('default item', () => (
    <ThemeProvider theme={theme}>
      <Container>
        <Card 
          src="https://terrigen-cdn-dev.marvel.com/content/prod/2x/marvels-spider-man-screen-04-ps4-us-30mar18.jpeg"
          title="My title"
        />
      </Container>
  </ThemeProvider>
  ));
