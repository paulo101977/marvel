import React from 'react';


import { Form } from '../../atoms/form';
import { Row } from '../../atoms/row';
import { Col, Col12, Col6 } from '../../atoms/col';
import { ImgResponsive } from '../../atoms/img';
import Input from '../../atoms/input';
import { ButtonPrimary, ButtonSecondary } from '../../atoms/buttons';
import TextArea from '../../atoms/text-area';
import Title from '../../atoms/title';


const getColor = (props) => {
  return props.theme && props.theme.colors ? props.theme.colors.primary : 'white';
}

const EditContainerWrapper = Form.extend`
  h5{
    font-weight: bolder;
  }

  h5, span{
    color: ${ props => getColor(props)} !important;
  }

  span{
    font-size: 0.9rem;
  }

  .comics-container{
    margin-top: 1rem;

    .input-container{
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

      max-height: 300px;
      overflow-y: auto;
      margin-bottom: 20px;
    }
  }
`

class EditContainer extends React.Component{

  constructor(props){
    super(props);

    const { selectedItem } = props;

    let description = '';

    if( selectedItem && typeof selectedItem === 'object' ){
      description = selectedItem.get('description');
    }

    this.state = {
      description,
      fields: []
    }
  }

  changeField( e, index ){
    if(e){
      const { value } = e.target;
      const { fields } = this.state;
      const current = fields.find(item => item.key === index );

      if(current) { // found
        current['index'] = index;
        current['value'] = value;
      } else {
        fields.push({
          key: index,
          value
        })
      }

      this.setState({
        fields
      });
    }
  }

  changeDescription(e){
    if(e){
      const { value } = e.target;
      this.setState({ description: value });
    }
  }

  renderComics(comics){
    if(comics){
      const items = comics.get('items');
  
      if(items) {
        return (
          <Col className="comics-container">
            <Title.H5>Comics:</Title.H5>
  
            <Row className="input-container">
            {
              items.map( (item, index ) => {
                return (
                  <Col12 key={`comics-${index}`}>
                    <Input 
                      onChange={ (e)=> this.changeField(e, index) } 
                      defaultValue={ item.get('name') } />
                  </Col12>
                )
              })
            }
            </Row>
          </Col>
        )
      }
    } 
  
    return null;
  }

  cancel(e) {
    e.preventDefault();

    const { history } = this.props;

    if( history ){
      history.goBack();
    }
  }

  updateFields(fields, temp){
    const { items } = temp.comics;

    fields.map( item => {
      if(item && items[item.key]){
        items[item.key].name = item.value;
      }
    })
  }

  updateCurrent(selectedItem) {
    const { setItemSelected } = this.props;
    const { fields, description } = this.state;
    let temp = {}
    let clone = {}

    if(selectedItem) {
      Object.assign(clone, selectedItem)
      clone.description = description;

      if(fields && fields.length > 0){
        this.updateFields(fields, clone);
      }

      setItemSelected(clone);
    }
  }

  save(e) {
    e.preventDefault();

    const { history, editSelected, selectedItem } = this.props;
    const { description, fields } = this.state;

    if( history && editSelected){
      const id = selectedItem.get('id');
      const item = selectedItem.toJS();
      let temp = {};

      Object.assign(temp, item);

      editSelected(id, description, fields);
      this.updateCurrent(temp);

      history.goBack();
    }
  }

  render() {
  
    const { selectedItem } = this.props;

    let name = '', extension = '', src = '', description = '', comics = null;

    if( selectedItem && typeof selectedItem === 'object'){
      name = selectedItem.get('name');
      description = selectedItem.get('description');
      extension = selectedItem.get("thumbnail").get("extension");
      src = `${ selectedItem.get("thumbnail").get("path") }.${extension}`;
      comics = selectedItem.get('comics');
    }

    return ( 
      <EditContainerWrapper>
        <Row>
          <Col6>
            <ImgResponsive src={src} alt={name} title={name}/>
          </Col6>
          <Col6>
            <Row>
              <Col>
                <Title.H5>Description:</Title.H5>
                <TextArea 
                  rows="3" 
                  onChange={ (e) => this.changeDescription(e) }
                  defaultValue={description} />
              </Col>
            </Row>
            <Row>
              { this.renderComics(comics) }
            </Row>
            <Row>
              <Col>
                <ButtonSecondary onClick={ (e) => this.cancel(e) } >Cancel</ButtonSecondary>
                <ButtonPrimary onClick={ (e) => this.save(e) }>Save</ButtonPrimary>
              </Col>
            </Row>
          </Col6>
        </Row>
      </EditContainerWrapper>
    )
  }
} 

export default EditContainer;
export { EditContainer };