import styled from  'styled-components';

const Container = styled.div.attrs({className: 'container'})`
    background-color: ${ props => props.bg ? props.bg : ''} !important;
`;
const ContainerFluid = styled(Container).attrs({className: 'container-fluid'})``;

export default Container;
export { Container, ContainerFluid };
