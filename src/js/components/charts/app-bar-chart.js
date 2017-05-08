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

    if (aux['primary-data'].length === 0) return;

    var series = [];
    for(var i = 0; i < aux['primary-data'][0].data.length; i++ ){
      series[i] = [];
      for(var j = 0; j < aux['primary-data'].length; j ++){
        series[i].push(aux['primary-data'][j].data[i])
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

      new Chartist.Bar(this.chartContainer, {
        labels: this.state['chart-data'].labels,
        series: this.state['chart-data'].series
      }, {
        stackBars: true,
        axisY: {
          labelInterpolationFnc: function(value) {
            return (value / 1000);
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
      <div className="chart-container" ref={node => this.chartContainer = node}>
        <div className="loading-indicator animated-background">
          <div className="background-masker"></div>
          <div className="background-masker"></div>
          <div className="background-masker"></div>
          <div className="background-masker"></div>
        </div>
      </div>
    );
  }
}

export default BarChart;