import React from 'react';
import { Link } from 'react-router-dom';
import StoreWatchMixin from '../../mixins/StoreWatchMixin';
import AppStore from '../../stores/app-store';
//import ChartAPI from '../../api/chart-api';
import BarChart from '../charts/app-bar-chart';



function componentWillMount() {
  return {
    data: AppStore.getActivityNumbers()
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

  var data, view, width, height, ratio, options, chart;

  var renderChart = () => {
    console.log('resize event');
    width = document.body.getBoundingClientRect().width,
    ratio = 2.4,
    height = width / ratio;
    options.width =  width;
    options.height = height;
    chart.draw(view, options);
  };

  // Promise.all([props.api, props.data]).then(_props => {
  //   data = google.visualization.arrayToDataTable(_props[1].numbers_activity);
  //   view = new google.visualization.DataView(data);
  //   view.setColumns([0, 1, 2, 3, 4, 5, 6]);
  //
  //   options = {
  //     legend: { position: 'top', maxLines: 6 },
  //     bar: { groupWidth: '75%' },
  //     isStacked: true,
  //     vAxis: {textPosition:'out'},
  //     hAxis: { ticks: [{v:0, f:'0'}, {v:250, f:'250'}, {v:500, f:'500'}, {v:1000, f:'1000'}, {v:1500, f:'1500'}] }
  //   };
  //
  //   chart = new google.visualization.BarChart(document.querySelector(".chart-container"));
  //   renderChart();
  // });
  //
  // window.onresize = debounce(renderChart, 150, false);


  return (
    <div>
      <h1>Numbers Page</h1>
      <Link to="/efficiency">Activity Efficiency</Link>
      <BarChart last="Robinson"></BarChart>
    </div>
  )
}

export default StoreWatchMixin(Numbers, componentWillMount);