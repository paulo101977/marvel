import React from  'react';
import styled from  'styled-components';

const Col = styled.div.attrs({className: 'col'})``;

const Col12 = Col.extend.attrs({className: 'col-md-12'})``;

const Col6 = Col.extend.attrs({className: 'col-md-6'})``;

export default Col;
export { Col, Col12, Col6 };
