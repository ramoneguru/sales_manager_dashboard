import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Numbers from './numbers/app-numbers';
import Efficiency from './efficiency/app-efficiency';
import Template from './app-template';
import { fetchSalesReps, fetchActivityNumbers} from '../actions/app-actions';
import rootReducer from '../reducers/app-reducers';
import { hasStorage } from '../util/app-util';

//import { createLogger } from 'redux-logger'
//const loggerMiddleware = createLogger();

let store = null;
let persistedState = null;
let expiration = new Date().getTime() - (1 * 24 * 60 * 60 * 1000);


let _createStore = (persistedState) => {
  if(hasStorage() && persistedState) {
    store = createStore(
      rootReducer,
      persistedState,
      applyMiddleware(thunkMiddleware)
    );
  }else{
    console.log('creating store with rootReducer')
    store = createStore(
      rootReducer,
      applyMiddleware(thunkMiddleware)
    );
  }
}

let refreshStore = () => {
  Promise.all([
    store.dispatch(fetchSalesReps(0)),
    store.dispatch(fetchActivityNumbers(0))
  ]).then(() => {
    if(hasStorage()) {
      localStorage.setItem('test', JSON.stringify(store.getState()))
    }
  });
}


if(hasStorage()){
  persistedState = JSON.parse(localStorage.getItem('test'))
}

if(persistedState){
  if(persistedState.activityNumbers.lastUpdated > expiration){
    console.log('state loaded from local storage is good no need to fetch')
    _createStore(persistedState)
  }else{
    _createStore()
    refreshStore()
  }
}else{
  _createStore()
  refreshStore()
}

export default () => {
  return (
    <Provider store={store}>
      <Router history={history}>
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