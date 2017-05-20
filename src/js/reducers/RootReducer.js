/**
 *  Responsible for Combining Critical Path App Reducers
 *
 * @author Drew Robinson (hello@drewrobinson.com)
 * @version 0.0.1
 */

import { combineReducers } from 'redux'
import SalesReps from './SalesReps';
import ActivityNumbers from './ActivityNumbers';
import  ActivityEfficiency from './ActivityEfficiency';

const RootReducer = combineReducers({
  SalesReps,
  ActivityNumbers,
  ActivityEfficiency
});

export default RootReducer;