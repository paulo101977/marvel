import React from 'react';


import { Row }  from '../../atoms/row';
import { Col }  from '../../atoms/col';
import {
    ButtonPrimary,
    ButtonAlert
} from '../../atoms/buttons';

import {
    ImgMini
} from '../../atoms/img';

const ListItemWrapper = Row.extend`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* TODO: change the color to variable */
    background: cadetblue;
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
                    <ButtonPrimary
                        onClick={ () => this.see() }
                        >{ editText }</ButtonPrimary>
                    <ButtonAlert
                        onClick={ () => this.edit() }
                        >{ seeText }</ButtonAlert>
                </Col>
            </ListItemWrapper>
        )
    }
}


export default ListItem;
export { ListItem };
