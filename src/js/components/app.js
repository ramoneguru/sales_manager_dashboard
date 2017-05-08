import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Numbers from './numbers/app-numbers';
import Efficiency from './efficiency/app-efficiency';
import Template from './app-template';
import fetchActivityNumbers from '../actions/app-actions';
import rootReducer from '../reducers/app-reducers';

const loggerMiddleware = createLogger()

const persistedState = {
  "ActivityNumbers": {
    repId: '001',
    didInvalidate: false,
    entities: [],
    isFetching: false,
    lastUpdated: null
  }
};

const store = createStore(
  rootReducer,
  persistedState,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

store.dispatch(fetchActivityNumbers(persistedState.ActivityNumbers.repId)).then(()=>{ //001 is a mock sales rep employee id
  //console.log('App Initial State -> store.getState(): ', store.getState())
})

export default () => {
  return (
    <Provider store={store}>
      <Router>
        <Template>
          <Switch>
            <Route exact path="/" component={ Numbers }/>
            <Route exact path="/efficiency" component={ Efficiency }/>
          </Switch>
        </Template>
      </Router>
    </Provider>
  )
}