import { combineReducers } from 'redux'
import SalesReps from './app-salesreps-reducer';
import ActivityNumbers from './app-activitynumbers-reducer';


const rootReducer = combineReducers({
  SalesReps,
  ActivityNumbers
});

export default rootReducer;