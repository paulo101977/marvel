import React from  'react';
import styled from  'styled-components';

const Col12 = styled.div.attrs({className: 'col-md-12'})`
    ${props => `color: ${props.theme.main}`}
`;

const Col6 = styled.div.attrs({className: 'col-md-6'})`
    ${props => `color: ${props.theme.main}`}
`;

export default Col12;
export { Col12, Col6 };
