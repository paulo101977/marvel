import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Dashboard = () => (
    <div>dashboard</div>
)

const Route2 = () => (
    <div>home</div>
)

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/home" exact component={Route2}/>
    </Switch>
  </BrowserRouter>
)

export default AppRouter;
export { AppRouter };