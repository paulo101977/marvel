import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as Selection from '../../../actions/Selection';

import TemplateCommon from '../../templates/common';

import DetailContainer from '../../organisms/detail-container';

const headerConfig = {
    hasSearch: false
}

class DetailPage extends React.Component {

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
        const { selectedItem, history, updateTheme }  = this.props;

        let headerTitle = '';

        if( selectedItem && typeof selectedItem === 'object' && selectedItem.get("id")){
            headerTitle = selectedItem.get('name');
        } else {
            this.goBack();
        }

        return ( 
            <TemplateCommon 
                {...headerConfig} 
                hasEdit={true}
                editText="Edit Character"
                updateTheme={updateTheme}
                headerTitle={ headerTitle } 
                history={history}>
                <DetailContainer 
                    selectedItem={selectedItem}
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

  
export default connect(mapStateToProps, mapDispatchToProps)(DetailPage)
export { DetailPage };