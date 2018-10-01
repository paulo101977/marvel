import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from '../components/pages/home';
import DetailPage from '../components/pages/detail';
import EditPage from '../components/pages/edit';
import { ThemeProvider } from 'styled-components';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as AppAction from '../actions';


const AppRouter = (props) => {
  const { themeSelected, updateTheme } = props;

  console.log('appRouter', updateTheme)
  return (
    <ThemeProvider theme={themeSelected}>
      <BrowserRouter>
          <Switch>
              <Route 
                path="/" 
                exact render={(props) => <HomePage {...props} updateTheme={updateTheme} />}  />
              <Route 
                path="/detail" 
                exact 
                render={(props) => <DetailPage {...props} updateTheme={updateTheme} />} /> 
              <Route 
                path="/edit" 
                exact 
                render={(props) => <EditPage {...props} updateTheme={updateTheme} />}/>
          </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

function mapStateToProps (state) {
  const themeSelected = state.App.get('theme').toJS();

  return {
      themeSelected
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
      { 
          ...AppAction,
      },
      dispatch
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(AppRouter)
export { AppRouter };
