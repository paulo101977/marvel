import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Container from '../container';
import Button from '../buttons';
import { Input } from '../input';

import Row from '../row';

import { Col6 } from '../col';

storiesOf('Atoms/Input', module)
  .add('with button', () => (
    <Container>
      <Row>
        <Col6>
          <Input placeholder="Type anything" />
        </Col6>
        <Col6>
          <Button>Click</Button>
        </Col6>
      </Row>
    </Container>
  ));