
import styled from  'styled-components';

const Label = styled.label` color: ${ props => props.theme && props.theme.button ? props.theme.button.colors.primary : ''} !important `;

export default Label;
export { Label };
