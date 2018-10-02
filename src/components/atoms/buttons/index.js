import styled from  'styled-components';

const Button = styled.button.attrs({className: 'btn'})`
    width: ${props => props.isFull ? `100%` : ''  };
    color: ${ props => props.theme && props.theme.button ? props.theme.button.colors.primary : ''} !important;
`;

const ButtonPrimary = styled(Button)`
    background: ${ props => props.theme && props.theme.button ? props.theme.button.bg.light : ''} !important;
`;
const ButtonSecondary = styled(Button)`
    background: ${ props => props.theme && props.theme.button ? props.theme.button.bg.dark : ''} !important;
`;


export default Button;
export { 
    Button, 
    ButtonPrimary, 
    ButtonSecondary
};
