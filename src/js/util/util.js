import Constants from '../constants/constants';
/**
 * Provides various helper/utility methods
 * @exports {debounce, hasStorage}
 */

/**
 * Helper function for preventing multiple function invocations
 * @param func
 * @param wait
 * @returns {Function}
 */
const debounce = (func, wait) => {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      func.apply(context, args);
    };
    var callNow = !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

/**
 * Helper method for determining if local storage is available
 * @returns {boolean}
 */
const hasStorage = () => {
  var test = 'test';
  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  }
  catch(e) {
    return false;
  }
};

export { debounce, hasStorage };