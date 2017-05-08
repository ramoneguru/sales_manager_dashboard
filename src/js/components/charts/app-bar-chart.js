import React from 'react';
import Chartist from 'chartist-webpack';
import classNames from 'classnames';

class BarChart extends React.Component {

  constructor(props) {
    super(props);
    this.updateChart = this.updateChart.bind(this)
  }

  componentWillMount(){
    this.setState(this.props.data);
  }

  componentDidMount(){}

  componentWillUnmount(){}

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps.data, this.updateChart)
  }

  updateChart(){
    console.log('update chart', this.state);
    // var width, height, ratio, options;
    //
    // var renderChart = () => {
    //   width = document.body.getBoundingClientRect().width,
    //     ratio = 2.4,
    //     height = width / ratio;
    //   options.width =  width;
    //   options.height = height;
    // };

    // new Chartist.Bar('.chart-container', {
    //   labels: ['Dunkin Donuts', 'Liberty Mutual', 'Work Day', 'Netflix','Atlassian','Kellogs'],
    //   series: [
    //     [800000, 500000, 140000, 700000, 700000, 200000],
    //     [200000, 400000, 500000,  300000, 600000, 150000],
    //     [100000, 200000, 400000,  100000, 400000, 100000]
    //   ]
    // }, {
    //   stackBars: true,
    //   horizontalBars: true,
    //   axisX: {
    //     labelInterpolationFnc: function(value) {
    //       return (value / 1000) + 'k';
    //     }
    //   }
    // }).on('draw', function(data) {
    //   if(data.type === 'bar') {
    //     data.element.attr({
    //       style: 'stroke-width: 20px'
    //     });
    //   }
    // });
  }

  render( props ){
    return (
      <div className="chart-container">
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