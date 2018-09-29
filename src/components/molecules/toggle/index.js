
import React from 'react';

import Label from '../../atoms/label';
import Input from '../../atoms/input';
import Span from '../../atoms/span';

const LabelWrapper = Label.extend`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

    input {display:none;}

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
        border: 2px solid ${ props => props.theme && props.theme.toggle ? props.theme.toggle.dark : '#2196F3' };
        border-radius: 34px;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 2px;
        bottom: 2px;
        background-color: ${ props => props.theme && props.theme.toggle ? props.theme.toggle.dark : '#2196F3' };
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 100%;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px ${ props => props.theme && props.theme.toggle ? props.theme.toggle.light : '#2196F3' };
    }

    input:checked + .slider:before {
        transform: translateX(26px);
        border-radius: 100%;
    }

`

const Toggle = props => {

    return (
        <LabelWrapper>
            <Input type="checkbox" />
            <Span className="slider"></Span>
        </LabelWrapper>
    )
}

export default Toggle;
export { Toggle };