import React from  'react';
import styled from  'styled-components';

const Span = styled.span` color: ${ props => props.theme && props.theme.button ? props.theme.button.colors.primary : ''} !important `;

export default Span;
export { Span };
