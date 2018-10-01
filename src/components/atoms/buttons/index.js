import React from  'react';
import styled from  'styled-components';

const Button = styled.button.attrs({className: 'btn'})`
    width: ${props => props.isFull ? `100%` : ''  };
    color: ${ props => props.theme && props.theme.button ? props.theme.button.colors.primary : ''} !important;
`;

const ButtonPrimary = Button.extend`
    background: ${ props => props.theme && props.theme.button ? props.theme.button.bg.light : ''} !important;
`;
const ButtonSecondary = Button.extend`
    background: ${ props => props.theme && props.theme.button ? props.theme.button.bg.dark : ''} !important;
`;


export default Button;
export { 
    Button, 
    ButtonPrimary, 
    ButtonSecondary
};
