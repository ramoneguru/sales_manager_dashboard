/**
 *
 * @author Drew Robinson (hello@drewrobinson.com)
 * @version 0.0.1
 * @exports Numbers Class
 */

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NumbersSummary from './NumbersSummary';
import BarChart from '../charts/BarChart';

/**
 *
 * @param state
 * @param ownProps
 * @returns {{activityNumbers: *, salesReps: *, chartView: string}}
 */
const mapStateToProps = (state, ownProps) => {
  return {
    activityNumbers : state.ActivityNumbers,
    salesReps       : state.SalesReps,
    chartView       : '30D'
  }
}

/**
 * Represents a sales team's number of activities
 */
class Numbers extends React.Component {

  /**
   * Binds chartViewClickHandler to context of instance
   * @param props
   */
  constructor(props) {
    super(props);
    this.chartViewClickHandler = this.chartViewClickHandler.bind(this)
  }

  /**
   * Invokes propsChangeHandler
   */
  componentWillMount() {
    this.propsChangeHandler()
  }

  /**
   * Invokes propsChangeHandler with new props
   * @param props
   */
  componentWillReceiveProps(props) {
    this.propsChangeHandler(props)
  }

  /**
   * Handles chart view menu click. Invokes propsChangeHandler with helper object representing new state
   * @param e
   */
  chartViewClickHandler(e){
    var chartView = e.target.getAttribute('data-chartView');
    if(chartView){
      let aux = Object.assign({}, this.state);
      aux.chartView = chartView;
      this.propsChangeHandler(aux)
    }
  }

  /**
   * Sets local state based on props or based on optional _props arg represeting new state
   * @param _props
   */
  propsChangeHandler(_props){
    const props = _props || this.props;
    this.setState({
      activityNumbers : props.activityNumbers,
      salesReps       : props.salesReps,
      chartView       : props.chartView
    });
  }

  /**
   * Responsible for rendering component
   * @returns {XML}
   */
  render(){
    return (
      <div>
        <header className="numbers-header">
          <h1 className="page-title">Activity Numbers</h1>
          <div className="chart-menu" >
             <span onClick={this.chartViewClickHandler}>
              <button type="button" data-chartView="30D" className={this.state.chartView === '30D' ? 'active' : ''}>30D</button>
              <button type="button" data-chartView="90D" className={this.state.chartView === '90D' ? 'active' : ''}>90D</button>
              <button type="button" data-chartView="12M" className={this.state.chartView === '12M' ? 'active' : ''}>12M</button>
             </span>
          </div>
        </header>

        <BarChart activityNumbers={ this.state.activityNumbers} salesReps={ this.state.salesReps } chartView={ this.state.chartView }></BarChart>

        <section className="activity-metrics">
          <div className="wrap">
            <div className="content">
              <NumbersSummary activityNumbers={ this.state.activityNumbers.entities } salesReps={ this.state.salesReps.entities } />
            </div>
            <div className="sidebar">&nbsp;</div>
          </div>
        </section>
      </div>
    )
  }
}

Numbers.propTypes =  {
  'activityNumbers' : PropTypes.object.isRequired,
  'salesReps'       : PropTypes.object.isRequired,
  'chartView'       : PropTypes.string.isRequired
}

export default connect(mapStateToProps)(Numbers);