
import styled from  'styled-components';

const Description = styled.p`
    ${ props => props.theme && props.theme.default ? `
        color: ${ props.theme.default.fontColor };
    ` : ''}

    font-weight: ${ props => props.isBolder ? 'bolder': ''};
`;

export default Description;
export { Description };
