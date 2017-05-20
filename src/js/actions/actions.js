/**
 *  Represents Redux Action Creators
 *
 * @author Drew Robinson (hello@drewrobinson.com)
 * @version 0.0.1
 * @exports { invalidateActivityNumbers, invalidateActivityEfficiency, invalidateSalesReps, fetchSalesReps, fetchActivityNumbers, fetchActivityEfficiency }
 */

import fetch from 'isomorphic-fetch';
import Constants from '../constants/constants';

/**
 * Responsible for invalidating activity numbers data
 * @param repId
 * @returns {{type: string, repId: *}}
 */
const invalidateActivityNumbers = (repId) => {
  return {
    type: Constants.INVALIDATE_ACTIVITY_NUMBERS,
    repId
  }
}

/**
 * Responsible for requesting activity numbers data
 * @param repId
 * @returns {{type: string, repId: *}}
 */
const requestActivityNumbers = (repId) => {
  return {
    type: Constants.REQUEST_ACTIVITY_NUMBERS,
    repId
  }
}

/**
 * Responsible for receiving activity numbers data
 * @param repId
 * @param json
 * @returns {{type: string, repId: *, entities: (*|NamedNodeMap), receivedAt: number}}
 */
const receiveActivityNumbers = (repId, json) => {
  return {
    type       : Constants.RECEIVE_ACTIVTY_NUMBERS,
    repId,
    entities   : json.data.entities,
    receivedAt : Date.now()
  }
}

/**
 * Responsible for fetching activity numbers data
 * @param repId
 * @returns {Function}
 */
const fetchActivityNumbers = (repId) => {
  return function (dispatch) {
    dispatch(requestActivityNumbers(repId))
    return fetch(`${Constants.PROTOCOL}//${Constants.HOST}/data/numbers.json?${repId}`)
      .then(response => response.json())
      .then(json =>
        dispatch(receiveActivityNumbers(repId, json))
      )
      .catch(function(reason) {
        throw new Error('Network Error: ' + reason)
      });
  }
}

/**
 * Responsible for invalidating sales reps data
 * @param repId
 * @returns {{type: string, repId: *}}
 */
const invalidateSalesReps = (repId) => {
  return {
    type: Constants.INVALIDATE_SALES_REPS,
    repId
  }
}

/**
 * Responsible for requesting sales reps data
 * @param repId
 * @returns {{type: string, repId: *}}
 */
const requestSalesReps = (repId) => {
  return {
    type: Constants.REQUEST_SALES_REPS,
    repId
  }
}

/**
 * Responsible for receiving sales reps data
 * @param repId
 * @param json
 * @returns {{type: string, repId: *, entities: (*|NamedNodeMap), receivedAt: number}}
 */
const receiveSalesReps = (repId, json) => {
  return {
    type       : Constants.RECEIVE_SALES_REPS,
    repId,
    entities   : json.data.entities,
    receivedAt : Date.now()
  }
}

/**
 * Responsible for fetching sales reps data
 * @param repId
 * @returns {Function}
 */
const fetchSalesReps = (repId) => {
  return function (dispatch) {
    dispatch(requestSalesReps(repId))
    return fetch(`${Constants.PROTOCOL}//${Constants.HOST}/data/salesreps.json?${repId}`)
      .then(response => response.json())
      .then(json =>
        dispatch(receiveSalesReps(repId, json))
      )
      .catch(function(reason) {
        throw new Error('Network Error: ' + reason)
      });
  }
}

/**
 * Responsible for invalidating activity efficiency data
 * @param repId
 * @returns {{type: string, repId: *}}
 */
const invalidateActivityEfficiency = (repId) => {
  return {
    type: Constants.INVALIDATE_ACTIVITY_EFFICIENCY,
    repId
  }
}

/**
 * Responsible for requesting activity efficiency data
 * @param repId
 * @returns {{type: string, repId: *}}
 */
const requestActivityEfficiency = (repId) => {
  return {
    type: Constants.REQUEST_ACTIVITY_EFFICIENCY,
    repId
  }
}

/**
 * Responsible for receiving activity efficiency data
 * @param repId
 * @param json
 * @returns {{type: string, repId: *, entities: (*|NamedNodeMap), receivedAt: number}}
 */
const receiveActivityEfficiency = (repId, json) => {
  return {
    type       : Constants.RECEIVE_ACTIVTY_EFFICIENCY,
    repId,
    entities   : json.data.entities,
    receivedAt : Date.now()
  }
}

/**
 * Responsible for fetching activity efficiency data
 * @param repId
 * @returns {Function}
 */
const fetchActivityEfficiency = (repId) => {
  return function (dispatch) {
    dispatch(requestActivityEfficiency(repId))
    return fetch(`${Constants.PROTOCOL}//${Constants.HOST}/data/efficiency.json?${repId}`)
      .then(response => response.json())
      .then(json =>
        dispatch(receiveActivityEfficiency(repId, json))
      )
      .catch(function(reason) {
        throw new Error('Network Error: ' + reason)
      });
  }
}

export { invalidateActivityNumbers, invalidateActivityEfficiency, invalidateSalesReps, fetchSalesReps, fetchActivityNumbers, fetchActivityEfficiency }