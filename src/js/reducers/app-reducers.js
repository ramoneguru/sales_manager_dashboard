import { combineReducers } from 'redux'
import AppConstants from '../constants/app-constants';

const ActivityNumbers = (state = {
  repId: null,
  isFetching: false,
  didInvalidate: false,
  entities: []
}, action)  => {

  switch( action.type ){

    case AppConstants.INVALIDATE_ACTIVITY_NUMBERS:
      return Object.assign({}, state, {
        didInvalidate: true
      })

    case AppConstants.REQUEST_ACTIVITY_NUMBERS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })

    case AppConstants.RECEIVE_ACTIVTY_NUMBERS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        entities: action.entities,
        lastUpdated: action.receivedAt
      })

    default:
      return state
  }
}

const rootReducer = combineReducers({
  ActivityNumbers
});

export default rootReducer;