import React from 'react';
import BarChart from '../charts/app-bar-chart';

function componentWillMount() {
  return {
    data: 'app-numbers-data-placeholder'
  }
}

const Numbers = ( props ) => {

  var width, height, ratio, options;

  var renderChart = () => {
    width = document.body.getBoundingClientRect().width,
    ratio = 2.4,
    height = width / ratio;
    options.width =  width;
    options.height = height;
  };

  return (
    <div>
      <h1>Activity Numbers</h1>
      <BarChart></BarChart>
    </div>
  )
}

export default Numbers;