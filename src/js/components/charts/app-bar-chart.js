import React from 'react';
import Chartist from 'chartist-webpack';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class BarChart extends React.Component {

  constructor(props) {
    super(props);
    this.updateChart = this.updateChart.bind(this)
  }

  componentWillMount(){
    this.setState(this.props);
  }

  componentWillReceiveProps(props) {
    if (props.activityNumbers.isFetching || props.salesReps.isFetching) return;

    let aux = Object.assign({}, props,{
      'chartData':{ labels: [], series: []}
    }),

    chartView = aux['chartView'],
    series = [],
    labels = [],
    i = 0,
    _numEntities = aux.activityNumbers.entities;

    // O(n^2) assumes max of six reps per team and max of 12Months historical data
    while(i < _numEntities[0][chartView].length){
      series[i] = [];
      for (var j = 0; j < _numEntities.length; j++) {
        series[i].push(_numEntities[j][chartView][i])
        if (!labels.includes(aux.salesReps.entities[_numEntities[j].repId].name)) {
          labels.push(aux.salesReps.entities[_numEntities[j].repId].name)
        }
      }
      i++
    }

    aux['chartData']['series'] = series;
    aux['chartData']['labels'] = labels;
    this.setState(aux, this.updateChart)
  }

  updateChart(){
    var upperBound = 500;
    this.state.chartData.series.forEach(function(list){
      var max = Math.max.apply(null, list);
      upperBound += max;
    })

    new Chartist.Bar(this.chartContainer, {
      labels: this.state.chartData.labels,
      series: this.state.chartData.series
    }, {
      stackBars: true,
      axisY: {
        high:upperBound,
        labelInterpolationFnc: function(value) {
          return value;
        }
      }
    }).on('draw', function(data) {
      if(data.type === 'bar') {
        data.element.attr({
          style: 'stroke-width: 30px'
        });
      }
    });
  }


  render( props ){

    let loaderStyles = classNames('loading-indicator animated-background', this.state.activityNumbers.isFetching ? '' : 'end');

    return (
      <div>
        <figure className="chart-container" ref={node => this.chartContainer = node}>
          <div className={ loaderStyles }>
            <div className="background-masker"></div>
            <div className="background-masker"></div>
            <div className="background-masker"></div>
            <div className="background-masker"></div>
            <div className="background-masker"></div>
            <div className="background-masker"></div>
            <div className="background-masker"></div>
          </div>
        </figure>
        <ul className="chart-key">
          <li><i className="call"></i> Call</li>
          <li><i className="email"></i> Prosp. Email</li>
          <li><i className="deal"></i> Deal</li>
          <li><i className="stage2"></i> Stage 2</li>
        </ul>
      </div>
    );
  }
}

BarChart.propTypes =  {
  'activityNumbers': PropTypes.object.isRequired,
  'salesReps': PropTypes.object.isRequired
}

export default BarChart;