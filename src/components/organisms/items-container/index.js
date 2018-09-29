import React from 'react';


import { Container } from '../../atoms/container';
import { Row } from '../../atoms/row';
import  Card from '../../molecules/card';

import Description  from '../../atoms/description';

const getItems = props => {
  const { itemsList } = props;

  if( itemsList && itemsList.size > 0) {
    return itemsList.map( (item, index) => <Card key={`card-${index}`} item={item} />)
  }
  else {
    return renderEmpty();
  }
}

const renderEmpty = () => ( 
  <Container bg="#aaaaaa" className="container-empty">
    <Description>There are no items in the list!</Description>
  </Container>
)


const ItemsContainerWrapper = Row.extend`
  .container-empty{
    text-align: center;
    border-radius: 4px;
    min-height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
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