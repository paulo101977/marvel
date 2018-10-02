import styled from  'styled-components';

const Container = styled.div.attrs({className: 'container'})`
    background-color: ${ props => props.bg ? props.bg : ''} !important;
`;
const ContainerFluid = styled.div.attrs({className: 'container-fluid'})`
    background-color: ${ props => props.bg ? props.bg : ''} !important;
`;

export default Container;
export { Container, ContainerFluid };
