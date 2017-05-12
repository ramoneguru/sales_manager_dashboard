import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NumbersSummary from './app-numbers-summary';
import BarChart from '../charts/app-bar-chart';
import classNames from 'classnames';

const mapStateToProps = (state) => {
  return {
    'sales-reps': state.SalesReps,
    'activity-numbers': state.ActivityNumbers
  }
}

class Numbers extends React.Component {

  constructor(props) {
    super(props);
    this.chartViewClickHandler = this.chartViewClickHandler.bind(this)
  }

  componentWillMount() {
    this.setState({
      'activity-numbers':this.props['activity-numbers'],
      'sales-reps':this.props['sales-reps']
    });
  }

  componentWillReceiveProps(props) {
    this.setState({
      'activity-numbers':props['activity-numbers'],
      'sales-reps':props['sales-reps']
    });
  }

  chartViewClickHandler(e){
    var chartView = e.target.getAttribute('data-view');
    if(chartView){
      let aux = Object.assign({}, this.state);
      aux['activity-numbers'].chartView = chartView;
      this.setState(aux)
    }
  }

  render(){
    return (
      <div>
        <header className="numbers-header">
          <h1 className="page-title">Activity Numbers</h1>
          <div className="chart-menu" >
             <span onClick={this.chartViewClickHandler}>
              <button type="button" data-view="30D" className={this.state['activity-numbers'].chartView === '30D' ? 'active' : ''}>30D</button>
              <button type="button" data-view="90D" className={this.state['activity-numbers'].chartView === '90D' ? 'active' : ''}>90D</button>
              <button type="button" data-view="12M" className={this.state['activity-numbers'].chartView === '12M' ? 'active' : ''}>12M</button>
             </span>
          </div>
        </header>

        <BarChart chart-view={ this.state['activity-numbers'].chartView}
                  primary-data={ this.state['activity-numbers'].entities }
                  sales-reps={ this.state['sales-reps'].entities }></BarChart>

        <section className="activity-metrics">
          <div className="wrap">
            <div className="content">
              <NumbersSummary primary-data={ this.state['activity-numbers'].entities }
                              sales-reps={ this.state['sales-reps'].entities } />
            </div>
            <div className="sidebar">sidebar</div>
          </div>
        </section>
      </div>
    )
  }
}


export default connect(mapStateToProps)(Numbers);