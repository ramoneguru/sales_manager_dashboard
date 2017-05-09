import React from 'react';
import Chartist from 'chartist-webpack';
import classNames from 'classnames';

class BarChart extends React.Component {

  constructor(props) {
    super(props);
    this.updateChart = this.updateChart.bind(this)
  }

  componentWillMount(){
    this.setState(this.props);
  }

  componentDidMount(){}

  componentWillUnmount(){}

  componentWillReceiveProps(nextProps) {
    let aux = Object.assign({}, nextProps,{
      'chart-data':{ labels: [], series: []}
    });

    let view = aux['chart-view'];

    if (aux['primary-data'].length === 0) return;

    var series = [];

    // O(n^2) assumes max of six reps per team.
    // Outer loop for each item of view data; Inner loop number of entities
    for(var i = 0; i < aux['primary-data'][0][view].length; i++ ){
      series[i] = [];
      for(var j = 0; j < aux['primary-data'].length; j ++){
        series[i].push(aux['primary-data'][j][view][i])
      }
    }

    aux['chart-data']['series'] = series;

    aux['primary-data'].forEach((entity) => {
      aux['chart-data']['labels'].push(entity.name);
    });

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

    }//endif
  }

  render( props ){
    return (
      <figure className="chart-container" ref={node => this.chartContainer = node}>
        <div className="loading-indicator animated-background">
          <div className="background-masker"></div>
          <div className="background-masker"></div>
          <div className="background-masker"></div>
          <div className="background-masker"></div>
        </div>
      </figure>
    );
  }
}

export default BarChart;