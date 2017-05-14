import React from 'react';
import Chartist from 'chartist-webpack';
import PropTypes from 'prop-types';

class BarChart extends React.Component {

  constructor(props) {
    super(props);
    this.updateChart = this.updateChart.bind(this)
  }

  componentWillMount(){
    this.setState(this.props);
  }

  componentWillReceiveProps(props) {
    let aux = Object.assign({}, props,{
      'chart-data':{ labels: [], series: []}
    }),
      view = aux['chart-view'],
      series = [],
      labels = [];


    if( aux['primary-data'].length > 0 && Object.keys(aux['sales-reps']).length > 0 ) {
      // O(n^2) assumes max of six reps per team and max of 12Months historical data
      // Outer loop for each item of view data; Inner loop number of entities
      for (var i = 0; i < aux['primary-data'][0][view].length; i++) {
        series[i] = [];
        for (var j = 0; j < aux['primary-data'].length; j++) {

          series[i].push(aux['primary-data'][j][view][i])

          //Lookup sales rep name using series repId
          if (!labels.includes(aux['sales-reps'][aux['primary-data'][j].repId].name)) {
            labels.push(aux['sales-reps'][aux['primary-data'][j].repId].name)
          }
        }
      }
    }

    aux['chart-data']['series'] = series;
    aux['chart-data']['labels'] = labels;
    this.setState(aux, this.updateChart)
  }

  updateChart(){
    if(this.state['chart-data'].labels.length > 0 && this.state['chart-data'].series.length > 0){
      var upperBound = 500;
      this.state['chart-data'].series.forEach(function(list){
        var max = Math.max.apply(null, list);
        upperBound += max;
      })

      new Chartist.Bar(this.chartContainer, {
        labels: this.state['chart-data'].labels,
        series: this.state['chart-data'].series
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
  }

  render( props ){
    return (
      <div>
        <figure className="chart-container" ref={node => this.chartContainer = node}>
          <div className="loading-indicator animated-background">
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
  'chart-view': PropTypes.string.isRequired,
  'primary-data': PropTypes.array.isRequired,
  'sales-reps': PropTypes.object.isRequired
}

BarChart.defaultProps = {
  'chart-view': '30D',
  'primary-data':[],
  'sales-reps':{}
};

export default BarChart;