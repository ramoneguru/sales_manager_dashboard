import fetch from 'isomorphic-fetch';
import AppConstants from '../constants/app-constants';


//Action Creators
const invalidateActivityNumbers = (repId) => {
  return {
    type: AppConstants.INVALIDATE_ACTIVITY_NUMBERS,
    repId
  }
}

const requestActivityNumbers = (repId) => {
  return {
    type: AppConstants.REQUEST_ACTIVITY_NUMBERS,
    repId
  }
}

const receiveActivityNumbers = (repId, json) => {
  return {
    type: AppConstants.RECEIVE_ACTIVTY_NUMBERS,
    repId,
    entities: json.data.entities,
    receivedAt: Date.now()
  }
}

const fetchActivityNumbers = (repId) => {
  return function (dispatch) {
    dispatch(requestActivityNumbers(repId))
    return fetch(`${AppConstants.PROTOCOL}//${AppConstants.HOST}/data/numbers.json?${repId}`)
      .then(response => response.json())
      .then(json =>
        dispatch(receiveActivityNumbers(repId, json))
      )
      .catch(function(reason) {
        throw new Error('Network Error: ' + reason)
      });
  }
}

const requestSalesReps = (repId) => {
  return {
    type: AppConstants.REQUEST_SALES_REPS,
    repId
  }
}

const receiveSalesReps = (repId, json) => {
  return {
    type: AppConstants.RECEIVE_SALES_REPS,
    repId,
    entities: json.data.entities,
    receivedAt: Date.now()
  }
}

const fetchSalesReps = (repId) => {
  return function (dispatch) {
    dispatch(requestSalesReps(repId))
    return fetch(`${AppConstants.PROTOCOL}//${AppConstants.HOST}/data/sales-reps.json?${repId}`)
      .then(response => response.json())
      .then(json =>
        dispatch(receiveSalesReps(repId, json))
      )
      .catch(function(reason) {
        throw new Error('Network Error: ' + reason)
      });
  }
}


export { invalidateActivityNumbers, fetchSalesReps, fetchActivityNumbers }