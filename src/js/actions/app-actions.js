import fetch from 'isomorphic-fetch';
import AppConstants from '../constants/app-constants';

//Action Creators
function invalidateActivityNumbers(repId){
  return {
    type: AppConstants.INVALIDATE_ACTIVITY_NUMBERS,
    repId
  }
}

function requestActivityNumbers(repId){
  return {
    type: AppConstants.REQUEST_ACTIVITY_NUMBERS,
    repId
  }
}

function receiveActivityNumbers(repId, json){
  return {
    type: AppConstants.RECEIVE_ACTIVTY_NUMBERS,
    repId,
    entities: json.data.entities,
    receivedAt: Date.now()
  }
}

function fetchActivityNumbers(repId){
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

export default fetchActivityNumbers;