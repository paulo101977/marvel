import React from  'react';
import styled from  'styled-components';

const H1 = styled.h1` color: ${ props => props.theme && props.theme.colors ? props.theme.colors.secondary : ''} !important; `;
const H2 = styled.h2` color: ${ props => props.theme && props.theme.colors ? props.theme.colors.secondary : ''} !important; `;
const H3 = styled.h3` color: ${ props => props.theme && props.theme.colors ? props.theme.colors.secondary : ''} !important; `;
const H4 = styled.h4`color: ${ props => props.theme && props.theme.colors ? props.theme.colors.secondary : ''} !important; `;
const H5 = styled.h5`color: ${ props => props.theme && props.theme.colors ? props.theme.colors.secondary : ''} !important; `;
const H6 = styled.h6` color: ${ props => props.theme && props.theme.colors ? props.theme.colors.secondary : ''} !important; `;

const Title = {
    H1, H2, H3, H4, H5, H6
};

export default Title;
export { Title };
