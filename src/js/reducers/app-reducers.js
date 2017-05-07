import { combineReducers } from 'redux'
import AppConstants from '../constants/app-constants';
let i = 0;
//Reducers (specify how applications state changes in response to actions) Takes prev state and action and returns the next state (don't mutate state create a copy object)
const menu = (state = AppConstants.CLOSE_MENU, action)  => {

  switch( action.type ){
    case AppConstants.OPEN_MENU:
      return Object.assign({}, state, {
        menu: action.type
      })
    case AppConstants.CLOSE_MENU:
      return Object.assign({}, state, {
        menu: action.type
      })
    default:
      return state
  }
}

const salesActivityApp = combineReducers({
  menu
});

export default salesActivityApp;