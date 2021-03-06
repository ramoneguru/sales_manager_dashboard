/**
 *  Represents Redux SalesReps Action Reducer
 *
 * @author Drew Robinson (hello@drewrobinson.com)
 * @version 0.0.1
 */

import Constants from '../constants/constants';

/**
 * Responsible for determining state in redux store for sales reps
 * @param state
 * @param action
 * @returns {*}
 * @constructor
 */
const SalesReps = (state = {
  didInvalidate : false,
  isFetching    : true,
  lastUpdated   : null
}, action)  => {

  switch( action.type ){

  case Constants.INVALIDATE_SALES_REPS:
    return Object.assign({}, state, {
      didInvalidate: true
    })

  case Constants.REQUEST_SALES_REPS:
    return Object.assign({}, state, {
      isFetching    : true,
      didInvalidate : false
    })

  case Constants.RECEIVE_SALES_REPS:
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