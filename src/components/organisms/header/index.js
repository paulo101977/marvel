import React from 'react';

import { ContainerFluid } from '../../atoms/container';
import Row from '../../atoms/row';
import { Col } from '../../atoms/col';
import { Title } from '../../atoms/title';
import { Span } from '../../atoms/span';

import InputArea from '../../molecules/input-area';
import Toggle from '../../molecules/toggle';
import { ButtonSecondary } from '../../atoms/buttons';

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

  .title-container{
    display: flex;
  }

  .go-back-symbol{
    font-size: 3rem;
    line-height: 0.83;
    margin-right: 10px;
  }

  .edit-container{
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }
`

const goBack = props => {
  const { history } = props;

  if(history){
    history.goBack();
  }
}

const goToEdit = props => {
  const { history } = props;

  if(history){
    history.push('/edit');
  }
}

const Header = (props) => {
  const { 
    headerTitle,
    idComp, 
    labelText, 
    placeholder, 
    buttonText, 
    filterText,
    isLine,
    hasSearch,
    hasEdit,
    editText
  } = props;

  return ( 
  <ContainerFluidWrapper>
    <Row>
      <Col className="title-container">
        { !hasSearch ? <Span onClick={ () => goBack(props) } className="go-back-symbol">&#8249;</Span> : null}
        <Title.H1>{headerTitle}</Title.H1>
      </Col>
      {
        hasEdit ? 
          <Col className="edit-container">
            <ButtonSecondary onClick={ () => goToEdit(props)} >
              { editText }
            </ButtonSecondary>
          </Col>: null
      }
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