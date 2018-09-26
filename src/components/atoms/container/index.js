import React from  'react';
import styled from  'styled-components';

const Container = styled.div.attrs({className: 'container'})`
    ${props => `color: ${props.theme.main}`}
`;

export default Container;
export { Container };
