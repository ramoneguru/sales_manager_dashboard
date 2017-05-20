/**
 *  Represents Redux ActivityEfficiency Action Reducer
 *
 * @author Drew Robinson (hello@drewrobinson.com)
 * @version 0.0.1
 */

import Constants from '../constants/constants';

const ActivityEfficiency = (state = {
  didInvalidate : false,
  isFetching    : true,
  lastUpdated   : null
}, action)  => {

  switch( action.type ){

  case Constants.INVALIDATE_ACTIVITY_EFFICIENCY:
    return Object.assign({}, state, {
      didInvalidate: true
    })

  case Constants.REQUEST_ACTIVITY_EFFICIENCY:
    return Object.assign({}, state, {
      isFetching    : true,
      didInvalidate : false
    })

  case Constants.RECEIVE_ACTIVTY_EFFICIENCY:
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

export default ActivityEfficiency;