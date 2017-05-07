import AppConstants from '../constants/app-constants';
import { dispatch } from '../dispatchers/app-dispatcher';

export default {

  //Action Creators
  openMenu(){
    return { type: AppConstants.OPEN_MENU }
  },

  closeMenu(){
    return { type: AppConstants.CLOSE_MENU }
  }

  // openMenu(){
  //   dispatch({
  //     actionType: AppConstants.OPEN_MENU
  //   })
  // },
  //
  // closeMenu(){
  //   dispatch({
  //     actionType: AppConstants.CLOSE_MENU
  //   })
  // }
}