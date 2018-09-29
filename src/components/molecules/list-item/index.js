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
    background: ${ props => props.theme ? props.theme.background.listItem : ''} !important;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    min-height: 90px;

    :hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
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
