import React from 'react';
import { storiesOf } from '@storybook/react';

import { ThemeProvider  } from 'styled-components';

import { EditPage } from '.';

import theme from '../../../stylus/light';


const itemConfig = {
    src:"https://terrigen-cdn-dev.marvel.com/content/prod/2x/marvels-spider-man-screen-04-ps4-us-30mar18.jpeg",
    editText:"Edit",
    seeText:"View"
}



storiesOf('Pages/EditPage', module)
  .add('with content static', () => (
    <ThemeProvider theme={theme}>
      <EditPage />
    </ThemeProvider>
  ));

  //ItemsContainer