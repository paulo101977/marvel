
import styled from  'styled-components';

const TextArea = styled.textarea.attrs({className: 'form-control'})`
    ::-webkit-scrollbar {
        width: 12px;
    }
    
    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
        border-radius: 10px;
    }
    
    ::-webkit-scrollbar-thumb {
        background: ${ props => props.theme && props.theme.background ? props.theme.background.scroll : ''} !important; 
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5); 
    }
`;

export default TextArea;
export { TextArea };
