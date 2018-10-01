import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as LoadData from '../../../actions/LoadData';
import * as Selection from '../../../actions/Selection';

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

        this.loadDataOrSearch = this.loadDataOrSearch.bind(this);
    }

    filterText(text = '') {
        this.loadDataOrSearch(text);
    }

    loadDataOrSearch(text = null) {
        const { loadData } = this.props;
        if(loadData){
            loadData(text);
        }
    }

    componentDidMount() {
       this.loadDataOrSearch();
    }

    render(){
        const { data, setItemSelected, history, updateTheme }  = this.props;

        console.log('props', this.props)

        return ( 
            <TemplateCommon 
                history={history} 
                {...headerConfig} 
                updateTheme={updateTheme}
                filterText={ (text)=> this.filterText(text) }>
                <ItemsContainer 
                    history={history}
                    setItemSelected={ setItemSelected }
                    itemsList={ data }/>
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
        { 
            ...LoadData,
            ...Selection,
        },
        dispatch
    )
}

  
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
export { HomePage };