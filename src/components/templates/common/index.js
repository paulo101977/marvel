import React from 'react';
import styled from 'styled-components';

import { ContainerFluid, Container } from '../../atoms/container';
import { Header } from '../../organisms/header';

const ContainerFluidWrapper = styled(ContainerFluid)`
    padding-left: 0px !important;
    padding-right: 0px !important;
    min-height: 100vh;
`

const TemplateCommon = (props) => {
  const { 
    updateTheme
  } = props;

  return ( 
  <ContainerFluidWrapper>
    <Header {...props} updateTheme={updateTheme}/>
    <Container>
        { props.children }
    </Container>
  </ContainerFluidWrapper>
  )
};

export default TemplateCommon;
export { TemplateCommon };