import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import Numbers from './numbers/app-numbers';
import Efficiency from './efficiency/app-efficiency';
import Template from './app-template';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import AppConstants from '../constants/app-constants';
import AppActions from '../actions/app-actions';
import salesActivityApp from '../reducers/app-reducers';

//example of persisted state from previous session possibly loaded from local storage or database
const persistedState = {
  menu: -1,
  entities: [{
    id: '1',
    name: 'Netflix',
    calls: 57,
    emails:220,
    deals: 2
  }],
};


//State Shape
// const initialState = {
//   type: AppConstants.CLOSE_MENU
// };

//Actions represent the facts about what happened, reducers update the state according to those actions and the Store is the object that brings them together.
/* The Store:
 Holds appliaction state
 Allows access to state via getState()
 Allows state to be updated via dispatch(action)
 Registers listeners via subscribe(listener)
 Handles unregistering listeners via the function returned by subscribe(listener)
 */
const store = createStore(salesActivityApp, persistedState);//persistedState object will override state determined by reducers

// console.log('store.getState().menu', store.getState().menu);
// store.dispatch({
//   type: AppConstants.OPEN_MENU
// })
// console.log('store.getState().menu', store.getState().menu);
//
// //test async
// setTimeout(function() {
//   if(store.getState().menu === -1){
//     store.dispatch({
//       type: AppConstants.CLOSE_MENU
//     });
//   }
//
//   console.log('store.getState().menu', store.getState().menu);
// }, 1000);

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