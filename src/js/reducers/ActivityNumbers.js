/**
 *  Represents Redux ActivityNumbers Action Reducer
 *
 * @author Drew Robinson (hello@drewrobinson.com)
 * @version 0.0.1
 */

import Constants from '../constants/constants';

/**
 * Responsible for determining state in redux store for activity numbers
 * @param state
 * @param action
 * @returns {*}
 * @constructor
 */
const ActivityNumbers = (state = {
  didInvalidate : false,
  isFetching    : true,
  lastUpdated   : null
}, action)  => {

  switch( action.type ){

  case Constants.INVALIDATE_ACTIVITY_NUMBERS:
    return Object.assign({}, state, {
      didInvalidate: true
    })

  case Constants.REQUEST_ACTIVITY_NUMBERS:
    return Object.assign({}, state, {
      isFetching    : true,
      didInvalidate : false
    })

  case Constants.RECEIVE_ACTIVTY_NUMBERS:
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

export default ActivityNumbers;