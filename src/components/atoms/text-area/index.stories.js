import React from 'react';
import { storiesOf } from '@storybook/react';
import Container from '../container';
import { TextArea } from '.';

import Row from '../row';

import { Col6 } from '../col';

storiesOf('Atoms/TextArea', module)
  .add('with button', () => (
    <Container>
      <Row>
        <Col6>
          <TextArea placeholder="Type anything" />
        </Col6>
      </Row>
    </Container>
  ));