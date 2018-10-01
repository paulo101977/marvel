
import React from  'react';
import styled from  'styled-components';

const Img = styled.img``;
const ImgResponsive = Img.extend.attrs({className: 'img-fluid'})``;
const ImgThumb = Img.extend.attrs({className: 'img-thumbnail'})``;
const ImgMini = Img.extend`
    width: auto;
    max-height: 60px;
`;

export default Img;
export { Img, ImgResponsive, ImgThumb, ImgMini };
