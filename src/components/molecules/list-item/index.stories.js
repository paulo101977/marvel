import React from 'react';
import { storiesOf } from '@storybook/react';

import Container from '../../atoms/container'
import ListItem from '.';


storiesOf('Molecules/ListItem', module)
  .add('default list item', () => (
    <Container>
      <ListItem />
    </Container>
  ));
