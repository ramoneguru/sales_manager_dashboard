import AppConstants from '../constants/app-constants';

const SalesReps = (state = {
  isFetching: false,
  didInvalidate: false,
  entities: []
}, action)  => {

  switch( action.type ){

    case AppConstants.INVALIDATE_SALES_REPS:
      return Object.assign({}, state, {
        didInvalidate: true
      })

    case AppConstants.REQUEST_SALES_REPS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })

    case AppConstants.RECEIVE_SALES_REPS:
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

export default SalesReps;