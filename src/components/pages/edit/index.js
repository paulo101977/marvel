import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Selection from '../../../actions/Selection';

import TemplateCommon from '../../templates/common';

import EditContainer from '../../organisms/edit-container';

const headerConfig = {
    hasSearch: false
}

class EditPage extends React.Component {

    constructor(props){
        super(props);

        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        const { history } = this.props;

        if( history ){
            return history.push('/');
        }
    }


    render(){
        const { selectedItem, setItemSelected, editSelected, history, updateTheme }  = this.props;

        let headerTitle = '';

        if( selectedItem && typeof selectedItem === 'object' && selectedItem.get("id")){
            headerTitle = selectedItem.get('name');
        } else {
            this.goBack();
        }

        return ( 
            <TemplateCommon 
                {...headerConfig} 
                headerTitle={ headerTitle } 
                updateTheme={updateTheme}
                history={history}>
                <EditContainer 
                    editSelected={ editSelected }
                    history={history}
                    selectedItem={selectedItem}
                    setItemSelected={ setItemSelected }
                />
            </TemplateCommon>
        )
    }

};

function mapStateToProps (state) {
    const selectedItem = state.Selection.get('selectedItem');
    return {
        selectedItem
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        { 
            ...Selection,
        },
        dispatch
    )
}

  
export default connect(mapStateToProps, mapDispatchToProps)(EditPage)
export { EditPage };