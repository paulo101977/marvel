import React from 'react';

import styled from 'styled-components';

import { Container } from '../../atoms/container';
import  ListItem from '../../molecules/list-item';

import Description  from '../../atoms/description';

const getItems = props => {
  const { itemsList } = props;

  if( itemsList ) {
    return itemsList.map( item => <ListItem {...item} />)
  }
  else {
    return renderEmpty();
  }
}

const renderEmpty = () => <Description>There are no items in the list!</Description>


const ItemsContainerWrapper = Container.extend`
  
`

const ItemsContainer = (props) => {
  
  return ( 
    <ItemsContainerWrapper>
      { getItems(props) }
    </ItemsContainerWrapper>
  )
};

export default ItemsContainer;
export { ItemsContainer };