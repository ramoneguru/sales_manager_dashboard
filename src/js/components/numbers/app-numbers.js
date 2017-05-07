import React from 'react';
import { Link } from 'react-router-dom';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import AppStore from '../../stores/app-store';
import BarChart from '../charts/app-bar-chart';



function componentWillMount() {
  return {
    data: 'app-numbers-data-placeholder'//AppStore.getActivityNumbers()
  }
}

function debounce(func, wait) {
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

const Numbers = ( props ) => {

  var width, height, ratio, options;

  //console.log('Numbers data: ', props.data);
  // props.data.then(_props => {
  //   console.log(_props.numbers_activity);
  // })

  var renderChart = () => {
    //console.log('resize event');
    width = document.body.getBoundingClientRect().width,
    ratio = 2.4,
    height = width / ratio;
    options.width =  width;
    options.height = height;
  };

  return (
    <div>
      <h1>Numbers Page</h1>
      <Link to="/efficiency">Activity Efficiency</Link>
      <BarChart></BarChart>
    </div>
  )
}

export default StoreWatchMixin(Numbers, componentWillMount);