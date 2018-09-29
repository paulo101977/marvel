import React from 'react';

import styled from 'styled-components';

import TemplateCommon from '../../templates/common';
import ItemsContainer from '../../organisms/items-container';

const headerConfig = {
    headerTitle: 'Home',
    idComp: 1,
    labelText: '',
    placeholder: 'Filter by a Hero Name',
    buttonText: 'Search',
    filterText: 'filter',
    isLine: true,
    hasSearch: true
}

class HomePage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            data: null
        }
    }

    loadData() {

    }

    filterData() {

    }

    componentDidMount() {
        this.loadData();
    }

    render(){
        // below this.props is to storybook usage
        const data  = this.state.data || this.props.data;

        return ( 
            <TemplateCommon {...headerConfig}>
              <ItemsContainer itemsList={ data }/>
            </TemplateCommon>
        )
    }

};

export default HomePage;
export { HomePage };