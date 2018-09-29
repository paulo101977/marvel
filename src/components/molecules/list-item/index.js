import React from 'react';


import { Row }  from '../../atoms/row';
import { Col }  from '../../atoms/col';
import {
    ButtonPrimary,
    ButtonSecondary
} from '../../atoms/buttons';

import {
    ImgMini
} from '../../atoms/img';

const ListItemWrapper = Row.extend`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    border: solid 1px ${ props => props.theme ? props.theme.background.listItem : ''} !important;
    border-radius: 4px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    min-height: 90px;
    margin-bottom: 10px;

    :hover {
        box-shadow: 0 16px 32px 0 rgba(0,0,0,0.4);
        transform: translateX(10px);
    }

    .btn-container{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-direction: row;
    }
`;

class ListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }


    edit() {

    }

    see() {

    }

    render() {

        const {
            editText ,
            seeText,
            src,
            alt
        } = this.props;

        return (
            <ListItemWrapper>
                <Col>
                    <ImgMini src={src} alt={alt} title={alt} />
                </Col>
                <Col>
                    <ImgMini src={src} alt={alt} title={alt} />
                </Col>
                <Col className="btn-container">
                    <ButtonPrimary
                        onClick={ () => this.see() }
                        >{ editText }</ButtonPrimary>
                    <ButtonSecondary
                        onClick={ () => this.edit() }
                        >{ seeText }</ButtonSecondary>
                </Col>
            </ListItemWrapper>
        )
    }
}


export default ListItem;
export { ListItem };
