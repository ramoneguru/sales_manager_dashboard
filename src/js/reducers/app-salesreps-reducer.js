/**
 *  Represents Redux SalesReps Action Reducer
 *
 * @author Drew Robinson (hello@drewrobinson.com)
 * @version 0.0.1
 */

import AppConstants from '../constants/app-constants';

const SalesReps = (state = {
  didInvalidate : false,
  isFetching    : true,
  lastUpdated   : null
}, action)  => {

  switch( action.type ){

  case AppConstants.INVALIDATE_SALES_REPS:
    return Object.assign({}, state, {
      didInvalidate: true
    })

  case AppConstants.REQUEST_SALES_REPS:
    return Object.assign({}, state, {
      isFetching    : true,
      didInvalidate : false
    })

  case AppConstants.RECEIVE_SALES_REPS:
    return Object.assign({}, state, {
      isFetching    : false,
      didInvalidate : false,
      entities      : action.entities,
      lastUpdated   : action.receivedAt
    })

  default:
    return state
  }
}

export default SalesReps;