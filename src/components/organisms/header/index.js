import React from 'react';

import styled from 'styled-components';

import { ContainerFluid } from '../../atoms/container';
import Row from '../../atoms/row';
import { Col } from '../../atoms/col';
import { Title } from '../../atoms/title'

import InputArea from '../../molecules/input-area';
import Toggle from '../../molecules/toggle';

const ContainerFluidWrapper = ContainerFluid.extend`
  background-color: ${ props => props.theme ? props.theme.background.header: '' }

  .row{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 10px;
    height: 120px;
    margin-bottom: 2rem;
  }

  .form-group{
    margin-bottom: 0px;
  }

  .toggle-ctn{
    max-width: 91px !important;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label{
    margin-bottom: 0px;
  }
`

const Header = (props) => {
  const { 
    headerTitle,
    idComp, 
    labelText, 
    placeholder, 
    buttonText, 
    filterText,
    isLine,
    hasSearch
  } = props;

  return ( 
  <ContainerFluidWrapper>
    <Row>
      <Col>
        <Title.H1>{headerTitle}</Title.H1>
      </Col>
      { hasSearch ? 
        <Col>
          <InputArea 
            isLine={ isLine }
            idComp={ idComp }
            labelText={ labelText }
            placeholder={ placeholder }
            buttonText={ buttonText }
            filterText={(value) => filterText ? filterText(value) : null }
            />
        </Col> : null
      }
      <Col className="toggle-ctn">
        <Toggle />
      </Col>
    </Row>
  </ContainerFluidWrapper>)
};

export default Header;
export { Header };