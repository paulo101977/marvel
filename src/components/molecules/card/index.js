import React from 'react';
import styled from 'styled-components';

import { Col, Col3 }  from '../../atoms/col';
import {
    Title
} from '../../atoms/title';

import {
    ImgResponsive
} from '../../atoms/img';

const CardWrapper = styled(Col3)`
    .card-content{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: white;
        border: solid 1px ${ props => props.theme ? props.theme.background.listItem : ''} !important;
        border-radius: 4px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        min-height: 200px;
        margin-bottom: 15px;
        flex-direction: column;
        padding: 10px 0;
        text-align: center;

        :hover {
            box-shadow: 0 16px 32px 0 rgba(0,0,0,0.4);
            transform: scale(1.02);
        }

        .img-container{
            width: 100%;
            flex-grow: 0;
            max-height: 120px;
            display: flex;
            flex-basis: auto;
        }
    }

    & h4{
        color: ${ props => props.theme && props.theme.colors ? props.theme.colors.primary : 'black'} !important;
        font-size: .8rem;
        margin-top: .5rem;
    }

`;

class Card extends React.Component {
    see() {
        const { setItemSelected, item, history } = this.props;
        if( setItemSelected && item && history) {
            setItemSelected(item);

            history.push('/detail')
        }
    }

    render() {

        const {
            title,
            src,
            item
        } = this.props;

        let url = src;
        let name = title;
        let extension = "";

        if(item && typeof item === 'object'){
            extension = item.get("thumbnail").get("extension");
            url = `${ item.get("thumbnail").get("path") }.${extension}`;
            name = item.get("name");
        }

        return (
            <CardWrapper>
                <Col 
                    onClick={ () => this.see() }
                    className="card-content">
                    <Col className="img-container">
                        <ImgResponsive src={url} alt={name} title={name} />
                    </Col>
                    <Col className="title-container">
                        <Title.H4>{name}</Title.H4>
                    </Col>
                </Col>
            </CardWrapper>
        )
    }
}


export default Card;
export { Card };
