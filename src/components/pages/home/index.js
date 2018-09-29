import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as LoadData from '../../../actions/LoadData';

import TemplateCommon from '../../templates/common';
import ItemsContainer from '../../organisms/items-container';

const headerConfig = {
    headerTitle: 'Home',
    idComp: 1,
    labelText: '',
    placeholder: 'Find by a Hero Name',
    buttonText: 'Search',
    isLine: true,
    hasSearch: true
}

class HomePage extends React.Component {

    constructor(props){
        super(props);
    }

    filterText(text) {

    }

    componentDidMount() {
        const { loadData } = this.props;
        if(loadData){
            loadData();
        }
    }

    render(){
        const { data }  = this.props;

        return ( 
            <TemplateCommon {...headerConfig} filterText={ (text)=> this.filterText(text) }>
              <ItemsContainer itemsList={ data }/>
            </TemplateCommon>
        )
    }

};

function mapStateToProps (state) {
    const response = state.LoadData.get('response')

    // data from immutable (immutable way)
    const data = response.get("data").get("results");

    return {
        data
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        LoadData,
        dispatch
    )
}

  
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
export { HomePage };