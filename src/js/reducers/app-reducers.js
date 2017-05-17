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