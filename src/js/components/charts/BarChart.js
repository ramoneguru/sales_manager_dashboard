/**
 *
 * @author Drew Robinson (hello@drewrobinson.com)
 * @version 0.0.1
 * @param props
 * @exports BarChart Class
 */

import React from 'react';
import Chartist from 'chartist-webpack';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 *  Class representing a Bar Chart.
 */
class BarChart extends React.Component {

  /**
   * Binds updateChart method to context of instance
   * @constructor
   * @param props
   */
  constructor(props) {
    super(props);
    this.updateChart = this.updateChart.bind(this)
    this.renderChart = this.renderChart.bind(this)
  }

  /**
   * Sets local state based on props
   */
  componentWillMount(){
    this.setState(this.props);
  }

  /**
   * Sets local state based on new props and invokes renderChart as callback
   * @param props
   */
  componentWillReceiveProps(props) {
    this.setState(props, this.renderChart);
  }

  /**
   * Invokes renderChart
   */
  componentDidMount(){
    this.renderChart();
  }

  /**
   * Invokes updateChart with formatted data
   * @param _props
   * @desc O(n^2) assumes max sales team size of 6 reps and 12 month historic data
   */
  renderChart(_props){
    let props = _props || this.props;

    if (props.activityNumbers.isFetching || props.salesReps.isFetching) return;

    let aux = Object.assign({}, props, {
        'chartData': { labels: [], series: []}
      }),
      chartView = aux['chartView'],
      series = [],
      labels = [],
      i = 0,
      _numEntities = aux.activityNumbers.entities;
    
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

  /**
   * Creates and renders new instance of chart
   */
  updateChart(){
 
    var upperBound = 500;
    this.state.chartData.series.forEach(function(list){
      var max = Math.max.apply(null, list);
      upperBound += max;
    })

    new Chartist.Bar(this.chartContainer, {
      labels : this.state.chartData.labels,
      series : this.state.chartData.series
    }, {
      stackBars : true,
      axisY     : {
        high                  : upperBound,
        labelInterpolationFnc : function(value) {
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

  /**
   * Responsible for loading indicator and chart keys and rendering component
   * @returns {XML}
   */
  render(){

    let indicatorStyles = classNames('load-indicator animated-background', this.state.activityNumbers.isFetching ? '' : 'end');

    const loadIndicator = this.props.indicators.map((indicator) =>
      <div className="load-indicator__background-masker" key={indicator}></div>
    );

    const chartKeys = this.props.chartKeys.map((key) => {
      return <li key={key}><i className={key.toLowerCase()}></i> {key}</li>
    });

    return (
      <div>
        <figure className="chart-container chart-container--barchart" ref={node => this.chartContainer = node}>
          <div className={ indicatorStyles }>
            {loadIndicator}
          </div>
        </figure>
        <ul className="chart-key chart-key--barchart">
          {chartKeys}
        </ul>
      </div>
    );
  }
}

BarChart.propTypes = {
  "activityNumbers" : PropTypes.object.isRequired,
  "salesReps"       : PropTypes.object.isRequired,
  "indicators"      : PropTypes.array.isRequired,
  "chartKeys"       : PropTypes.array.isRequired
};

BarChart.defaultProps = {
  indicators : [1, 2, 3, 4, 5, 6, 7],
  chartKeys  : ['Call', 'Email', 'Deal', 'Stage2']
}

export default BarChart;