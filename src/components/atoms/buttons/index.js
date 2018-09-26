import React from  'react';
import styled from  'styled-components';

const Button = styled.button.attrs({className: 'btn'})`
    ${props => `color: ${props.theme.main} !important`}
    ${props => props.isFull ? `width: 100%` : ''  }
`;

const ButtonPrimary = props => <Button {...props} className="btn-primary"></Button>;
const ButtonDanger = props => <Button {...props} className="btn-danger"></Button>;
const ButtonAlert = props => <Button {...props} className="btn-warning"></Button>;
const ButtonSuccess = props => <Button {...props} className="btn-success"></Button>;

export default Button;
export { 
    Button, 
    ButtonPrimary, 
    ButtonDanger, 
    ButtonAlert, 
    ButtonSuccess 
};
