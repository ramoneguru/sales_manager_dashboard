import React from 'react';
import moment from 'moment';
import Chartist from 'chartist-webpack';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class LineChart extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount(){
    this.setState(this.props);
  }

  componentWillReceiveProps(props) {
    this.renderChart(props);
  }

  componentDidMount(){
    this.renderChart();
  }

  renderChart(_props){
    let props = _props || this.props;

    if (props.activityEfficiency.isFetching || props.salesReps.isFetching) return;

    //...format chart data
    let aux = Object.assign({}, props,{
        'chartData':{ series: []}
      }),
      _effEntities = aux.activityEfficiency.entities;

    for(let i in _effEntities){

      var item = Object.create(Object.prototype,{
        name: {
          value: i,
          writable: false
        },
        data:{
          value: [],
          writable: true
        }
      });

      var data = _effEntities[i].map((entry) => {
        return{
          x: new Date(entry.date),
          y: entry.ratio
        }
      });

      item.data = data;

      aux.chartData.series.push(item);
    }

    this.setState(aux, this.updateChart)
  }

  updateChart(){
    new Chartist.Line(this.chartContainer, this.state.chartData, {
      axisX: {
        type: Chartist.FixedScaleAxis,
        divisor: 7,
        labelInterpolationFnc: function(value) {
          return moment(value).format('MMM D');
        }
      }
    });
  }

  render(){
    
    let indicatorStyles = classNames('loading-indicator animated-background', this.state.activityEfficiency.isFetching ? '' : 'end');

    const loadIndicator = this.props.indicators.map((indicator) =>
      <div className="background-masker" key={indicator}></div>
    );

    const chartKeys = this.props.chartKeys.map((key) => {
      return <li key={key}><i className={key.split(':')[0].trim().toLowerCase()}></i> {key}</li>
    });
    
    return (
      <div>
        <figure className="chart-container chart-container--linechart" ref={node => this.chartContainer = node}>
          <div className={ indicatorStyles }>
            {loadIndicator}
          </div>
        </figure>
        <ul className="chart-key chart-key--linechart">
          {chartKeys}
        </ul>
      </div>
    );
  }
}

LineChart.propTypes =  {
  'activityEfficiency': PropTypes.object.isRequired,
  'salesReps': PropTypes.object.isRequired
}

LineChart.defaultProps = {
  indicators: [1, 2, 3, 4],
  chartKeys: ['Call : Connect', 'Connect : Meeting Schd.', 'Meeting Schd. : Opp Sourced']
}

export default LineChart;