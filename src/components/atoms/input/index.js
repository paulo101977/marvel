import React from  'react';
import styled from  'styled-components';

const Input = styled.input.attrs({className: 'form-control'})`
    ${props => `color: ${props.theme.main}`}
`;

export default Input;
export { Input };
