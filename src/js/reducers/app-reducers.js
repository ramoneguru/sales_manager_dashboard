import { combineReducers } from 'redux'
import AppConstants from '../constants/app-constants';
import SalesReps from './app-salesreps-reducer';
import ActivityNumbers from './app-activitynumbers-reducer';


const rootReducer = combineReducers({
  SalesReps,
  ActivityNumbers
});

export default rootReducer;