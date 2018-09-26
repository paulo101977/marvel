import React from  'react';
import styled from  'styled-components';

const Row = styled.div.attrs({className: 'row'})`
    ${props => `color: ${props.theme.main}`}
`;

export default Row;
export { Row };
