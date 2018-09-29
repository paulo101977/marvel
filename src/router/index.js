import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import HomePage from '../components/pages/home';
import { ThemeProvider } from 'styled-components';
import theme from '../stylus/light';


const AppRouter = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={ HomePage }/>
            { 
                // <Route path="/detail" exact component={Route2}/> 
            }
        </Switch>
    </BrowserRouter>
  </ThemeProvider>
)

export default AppRouter;
export { AppRouter };
