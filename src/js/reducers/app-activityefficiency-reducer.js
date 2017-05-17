import AppConstants from '../constants/app-constants';

const ActivityEfficiency = (state = {
  didInvalidate: false,
  isFetching: true,
  lastUpdated: null
}, action)  => {

  switch( action.type ){

    case AppConstants.INVALIDATE_ACTIVITY_EFFICIENCY:
      return Object.assign({}, state, {
        didInvalidate: true
      })

    case AppConstants.REQUEST_ACTIVITY_EFFICIENCY:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })

    case AppConstants.RECEIVE_ACTIVTY_EFFICIENCY:
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

export default ActivityEfficiency;