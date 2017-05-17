/**
 *  Responsible for Combining Critical Path App Reducers
 *
 * @author Drew Robinson (hello@drewrobinson.com)
 * @version 0.0.1
 */

import { combineReducers } from 'redux'
import SalesReps from './app-salesreps-reducer';
import ActivityNumbers from './app-activitynumbers-reducer';
import  ActivityEfficiency from './app-activityefficiency-reducer';

const rootReducer = combineReducers({
  SalesReps,
  ActivityNumbers,
  ActivityEfficiency
});

export default rootReducer;