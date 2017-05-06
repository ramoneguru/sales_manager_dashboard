import AppConstants from '../constants/app-constants';
import { dispatch, register } from '../dispatchers/app-dispatcher';

export default {
  openMenu(){
    dispatch({
      actionType: AppConstants.OPEN_MENU
    })
  },
  
  closeMenu(){
    dispatch({
      actionType: AppConstants.CLOSE_MENU
    })
  }
}