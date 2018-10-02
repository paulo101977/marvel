
import styled from  'styled-components';

const Img = styled.img``;
const ImgResponsive = styled(Img).attrs({className: 'img-fluid'})``;
const ImgThumb = styled(Img).attrs({className: 'img-thumbnail'})``;
const ImgMini = styled(Img)`
    width: auto;
    max-height: 60px;
`;

export default Img;
export { Img, ImgResponsive, ImgThumb, ImgMini };
