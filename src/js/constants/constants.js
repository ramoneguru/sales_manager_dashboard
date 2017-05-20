/**
 *  Represents App Constants
 *
 * @author Drew Robinson (hello@drewrobinson.com)
 * @version 0.0.1
 */
export default {
  HOST                           : window.location.href.split('/')[2],
  PROTOCOL                       : location.protocol,
  REQUEST_ACTIVITY_NUMBERS       : 'REQUEST_ACTIVITY_NUMBERS',
  RECEIVE_ACTIVTY_NUMBERS        : 'RECEIVE_ACTIVITY_NUMBERS',
  INVALIDATE_ACTIVITY_NUMBERS    : 'INVALIDATE_ACTIVITY_NUMBERS',
  REQUEST_ACTIVITY_EFFICIENCY    : 'REQUEST_ACTIVITY_EFFICIENCY',
  RECEIVE_ACTIVTY_EFFICIENCY     : 'RECEIVE_ACTIVITY_EFFICIENCY',
  INVALIDATE_ACTIVITY_EFFICIENCY : 'INVALIDATE_ACTIVITY_EFFICIENCY',
  REQUEST_SALES_REPS             : 'REQUEST_SALES_REPS',
  RECEIVE_SALES_REPS             : 'RECEIVE_SALES_REPS',
  INVALIDATE_SALES_REPS          : 'INVALIDATE_SALES_REPS',
  PERSISTENCE_STATE              : 'SALES_MANAGER_DASHBOARD_PERSISTENCE_STATE'
}