import React from 'react';
import { storiesOf } from '@storybook/react';
import Description from '.';

import styled from 'styled-components';

import { ThemeProvider  } from 'styled-components';

import theme from '../../../stylus/light';


const Wrapper = styled.div`
  background-color: black;
`


storiesOf('Atoms/Description', module)
  .add('default case without theme', () => (
    <Description>
      Balblalalala dadlalala blalalal balll balalaldadad 
    </Description>
  )).add('default case with theme', () => (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Description>
          Balblalalala dadlalala blalalal balll balalaldadad 
        </Description>
      </Wrapper>
    </ThemeProvider>
  )).add('default case bolder', () => (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Description isBolder>
          Balblalalala dadlalala blalalal balll balalaldadad 
        </Description>
      </Wrapper>
    </ThemeProvider>
  ));