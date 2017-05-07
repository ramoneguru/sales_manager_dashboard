import React from 'react';
import Chartist from 'chartist-webpack';

class BarChart extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount( props ){
    console.log('BarChart componentWillMount ', props);
  }

  componentDidMount( props ){
    console.log('BarChart componentDidMount ', props);

    new Chartist.Bar('.chart-container', {
      labels: ['Dunkin Donuts', 'Liberty Mutual', 'Work Day', 'Netflix','Atlassian','Kellogs'],
      series: [
        [800000, 500000, 140000, 700000, 700000, 200000],
        [200000, 400000, 500000,  300000, 600000, 150000],
        [100000, 200000, 400000,  100000, 400000, 100000]
      ]
    }, {
      stackBars: true,
      horizontalBars: true,
      axisX: {
        labelInterpolationFnc: function(value) {
          return (value / 1000) + 'k';
        }
      }
    }).on('draw', function(data) {
      if(data.type === 'bar') {
        data.element.attr({
          style: 'stroke-width: 20px'
        });
      }
    });
  }

  componentWillUnmount(){
    console.log('Header Component Will UnMount');
  }

  render( props ){
    console.log('BarChart render: ', props);
    return (
      <div className="chart-container">
        <div className="loading-indicator">
          <div className="background-masker"></div>
          <div className="background-masker"></div>
          <div className="background-masker"></div>
          <div className="background-masker"></div>
        </div>
      </div>
    );
  }
}

// BarChart.propTypes = {
//   last: () => {
//     return 'What do we have here'
//   }
// };
BarChart.defaultProps = {
  first: 'Andrew'
};

export default BarChart;