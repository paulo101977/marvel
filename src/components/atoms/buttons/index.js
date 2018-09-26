import React from  'react';
import styled from  'styled-components';

const Button = styled.button.attrs({className: 'btn btn-primary'})`
    ${props => `color: ${props.theme.main}`}
`;

export default Button;
export { Button };
