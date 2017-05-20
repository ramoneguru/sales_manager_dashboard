import React from 'react';
import thunkMiddleware from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Numbers from './numbers/Numbers';
import Efficiency from './efficiency/Efficiency';
import Template from './Template';
import { fetchSalesReps, fetchActivityNumbers, fetchActivityEfficiency} from '../actions/actions';
import RootReducer from '../reducers/RootReducer';
import { hasStorage } from '../util/util';
//Disabled: import { createLogger } from 'redux-logger';
//Disabled: const loggerMiddleware = createLogger();
//Disabled: applyMiddleware(loggerMiddleware)

//IsDev true data peristance
let isDev = (window.location.origin === "http://localhost:8080") ? true : false;

let store = null;
let persistedState = null;
let expiration = new Date().getTime() - (1 * 24 * 60 * 60 * 1000);

let _createStore = (persistedState) => {
  if(hasStorage() && persistedState) {
    store = createStore(
      RootReducer,
      persistedState,
      applyMiddleware(thunkMiddleware)
    );
  }
  else{
    store = createStore(
      RootReducer,
      applyMiddleware(thunkMiddleware)
    );
  }
}

let refreshStore = () => {
  Promise.all([
    store.dispatch(fetchSalesReps(0)),
    store.dispatch(fetchActivityNumbers(0)),
    store.dispatch(fetchActivityEfficiency(0))
  ]).then(() => {
    if(hasStorage() && !isDev) {
      let _state = store.getState();
      localStorage.setItem('ActivityNumbers', JSON.stringify(_state.ActivityNumbers))
      localStorage.setItem('ActivityEfficiency', JSON.stringify(_state.ActivityEfficiency))
      localStorage.setItem('SalesReps', JSON.stringify(_state.SalesReps))
    }
  });
}


if(hasStorage() && !isDev){
  let pActivityNumbers = localStorage.getItem('ActivityNumbers')
  let pActivityEfficiency = localStorage.getItem('ActivityEfficiency')
  let pSalesReps = localStorage.getItem('SalesReps')

  if(pActivityNumbers && pActivityEfficiency && pSalesReps){
    persistedState = {
      ActivityNumbers    : JSON.parse(pActivityNumbers),
      ActivityEfficiency : JSON.parse(pActivityEfficiency),
      SalesReps          : JSON.parse(pSalesReps)
    };
  }
}

//@TODO consider refactoring to allow each payload to persist for unique durations
if(persistedState){
  if(persistedState.ActivityNumbers.lastUpdated > expiration){
    _createStore(persistedState)
  }
  else{
    _createStore()
    refreshStore()
  }
}
else{
  _createStore()
  refreshStore()
}


class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
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
}

export default App;