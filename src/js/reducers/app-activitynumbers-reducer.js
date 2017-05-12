import AppConstants from '../constants/app-constants';

const ActivityNumbers = (state = {
  repId: null,
  chartView:"30D",
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

export default ActivityNumbers;