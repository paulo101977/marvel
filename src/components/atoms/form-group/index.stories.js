import React from 'react';
import { storiesOf } from '@storybook/react';
import Container from '../container';
import Button from '../buttons';
import { Input } from '../input';
import { FormGroup } from '.';

import Row from '../row';

import { Col12 } from '../col';

import Label from '../label';

storiesOf('Atoms/FormGroup', module)
  .add('with input', () => (
    <Container>
      <Row>
        <Col12>
          <FormGroup>
            <Input placeholder="Type"/>
          </FormGroup>
        </Col12>
      </Row>
    </Container>
  )).add('with input and label', () => (
    <Container>
      <Row>
        <Col12>
          <FormGroup>
            <Label htmlFor="my_input">Label for Input</Label>
            <Input id="my_input" placeholder="Type"/>
          </FormGroup>
        </Col12>
      </Row>
    </Container>
  ));