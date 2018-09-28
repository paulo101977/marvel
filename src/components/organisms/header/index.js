import React from 'react';

import styled from 'styled-components';

import { ContainerFluid } from '../../atoms/container';
import Row from '../../atoms/row';
import { Col6 } from '../../atoms/col';

import InputArea from '../../molecules/input-area';

const ContainerFluidWrapper = ContainerFluid.extend`
  background-color: ${ props => props.theme ? props.theme.background.header: '' }

  .row{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    min-height: 90px;
  }

  .form-group{
    margin-bottom: 0px;
  }
`

const Header = (props) => {
  const { 
    idComp, 
    labelText, 
    placeholder, 
    buttonText, 
    filterText,
    isLine
  } = props;

  return ( 
  <ContainerFluidWrapper>
    <Row>
      <Col6></Col6>
      <Col6>
        <InputArea 
          isLine={ isLine }
          idComp={ idComp }
          labelText={ labelText }
          placeholder={ placeholder }
          buttonText={ buttonText }
          filterText={(value) => filterText ? filterText(value) : null }
          />
      </Col6>
    </Row>
  </ContainerFluidWrapper>)
};

export default Header;
export { Header };