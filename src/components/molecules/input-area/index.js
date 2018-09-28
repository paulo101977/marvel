import React from 'react';

import styled from 'styled-components';

import Label from '../../atoms/label';
import FormGroup from '../../atoms/form-group';
import Input from '../../atoms/input';
import { ButtonPrimary } from '../../atoms/buttons';

const InputAreaWrapper = FormGroup.extend`
    display: flex;
    flex-direction: column;

    ${ 
        props => props.isLine ? `
        max-height: 90px;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;

        & input{
            margin: 0 0.2rem;
        }
        ` : ''
    }
`;

class InputArea extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            textToSearch: ''
        }
    }

    textChanged(event) {
        const { value } = event.target;

        this.setState({
            textToSearch: value
        })
    }

    submit() {
        const { filterText } = this.props;
        const { textToSearch } = this.state;

        if( filterText ){
            filterText(textToSearch);
        }
    }

    render() {

        const { idComp , placeholder, buttonText, labelText, isLine } = this.props;

        return (
            <InputAreaWrapper isLine={isLine}>
                <Label htmlFor={ idComp }>{ labelText }</Label>
                <Input 
                    onChange={ (event) => this.textChanged(event)}
                    id={ idComp } 
                    placeholder={ placeholder }/>
                <ButtonPrimary onClick={ () => this.submit() } >{ buttonText }</ButtonPrimary>
            </InputAreaWrapper>
        )
    }
}
    

export default InputArea;
export { InputArea };