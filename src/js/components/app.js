import React from 'react';
import Numbers from './numbers/app-numbers';
import Efficiency from './efficiency/app-efficiency';
import Template from './app-template';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

export default () => {
  return (
    <Router>
      <Template>
        <Switch>
          <Route exact path="/" component={ Numbers }/>
          <Route exact path="/efficiency" component={ Efficiency }/>
        </Switch>
      </Template>
    </Router>
  )
}