import React from 'react';

import styled from 'styled-components';
import { Row } from '../../atoms/row';
import { Col, Col12, Col6 } from '../../atoms/col';
import { ImgResponsive } from '../../atoms/img';
import Span from '../../atoms/span';
import Title from '../../atoms/title';


const getColor = (props) => {
  return props.theme && props.theme.colors ? props.theme.colors.primary : 'white';
}

const renderComics = (comics) => {
  if(comics){
    const items = comics.get('items');

    if(items) {
      return (
        <Col className="comics-container">
          <Title.H5>Comics:</Title.H5>
          {
            items.map( (item, index ) => {
              return (
                <Col12 key={`comics-${index}`} className="mark">
                  <Span>{ item.get('name') }</Span>
                </Col12>
              )
            })
          }
        </Col>
      )
    }
  } 

  return null;
}

const DetailContainerWrapper = styled(Row)`
  h5{
    font-weight: bolder;
  }

  h5, span{
    color: ${ props => getColor(props)} !important;
  }

  span{
    font-size: 0.9rem;
  }

  .mark:before{
    content: '►';
    color: ${ props => getColor(props)} !important;
  }

  .comics-container{
    margin-top: 1rem;
  }
`

const DetailContainer = (props) => {
  
  const { selectedItem } = props;

  let name = '', extension = '', src = '', description = '', comics = null;

  if( selectedItem && typeof selectedItem === 'object'){
    name = selectedItem.get('name');
    description = selectedItem.get('description');
    extension = selectedItem.get("thumbnail").get("extension");
    src = `${ selectedItem.get("thumbnail").get("path") }.${extension}`;
    comics = selectedItem.get('comics');
  }

  return ( 
    <DetailContainerWrapper>
      <Col6>
        <ImgResponsive src={src} alt={name} title={name}/>
      </Col6>
      <Col6>
        <Row>
          <Col>
            <Title.H5>Description:</Title.H5>
            <Span>{description}</Span>
          </Col>
        </Row>
        <Row>
          { renderComics(comics) }
        </Row>
      </Col6>
    </DetailContainerWrapper>
  )
};

export default DetailContainer;
export { DetailContainer };