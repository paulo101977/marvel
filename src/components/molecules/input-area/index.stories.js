import React from 'react';
import { storiesOf } from '@storybook/react';
import Container from '../../atoms/container';
import InputArea from '.';
import { action, configureActions } from '@storybook/addon-actions';

import Row from '../../atoms/row';

import { Col12 } from '../../atoms/col';

const filterText = (value) => { 
  console.log('clicked', value);
};

storiesOf('Molecules/InputArea', module)
  .add('with function submit', () => (
    <Container>
      <Row>
        <Col12>
          <InputArea 
            idComp="12"
            labelText="Label"
            placeholder="My placeholder"
            buttonText="search"
            filterText={(value) => filterText(value)}
            />
        </Col12>
      </Row>
    </Container>
  )).add('with function submit and isLine', () => (
    <Container>
      <Row>
        <Col12>
          <InputArea 
            idComp="12"
            isLine
            labelText="Label"
            placeholder="My placeholder"
            buttonText="search"
            filterText={(value) => filterText(value)}
            />
        </Col12>
      </Row>
    </Container>
  ));