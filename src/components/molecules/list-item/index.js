import React from 'react';


import { Row }  from '../../atoms/row';
import { Col }  from '../../atoms/col';
import {
    ButtonPrimary,
    ButtonAlert
} from '../../atoms/buttons';

const ListItemWrapper = Row.extend`

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
            seeText
        } = this.props;

        return (
            <ListItemWrapper>
                <Col>
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
