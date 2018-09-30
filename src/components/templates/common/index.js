import React from 'react';

import styled from 'styled-components';

import { ContainerFluid, Container } from '../../atoms/container';
import { Header } from '../../organisms/header';

const ContainerFluidWrapper = ContainerFluid.extend`
    padding-left: 0px !important;
    padding-right: 0px !important;
    min-height: 100vh;
`

const TemplateCommon = (props) => {
  const { 
    headerTitle,
    idComp, 
    labelText, 
    placeholder, 
    buttonText, 
    filterText,
    isLine,
    hasSearch,
    history,
    hasEdit,
    editText
  } = props;

  return ( 
  <ContainerFluidWrapper>
    <Header {...props} />
    <Container>
        { props.children }
    </Container>
  </ContainerFluidWrapper>
  )
};

export default TemplateCommon;
export { TemplateCommon };