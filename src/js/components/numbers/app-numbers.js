import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NumbersSummary from './app-numbers-summary';
import BarChart from '../charts/app-bar-chart';


const mapStateToProps = (state, ownProps) => {
  return {
    activityNumbers: state.ActivityNumbers,
    salesReps:state.SalesReps,
    chartView:'30D'
  }
}

/**
 * Represents a sales team's number of activities
 */
class Numbers extends React.Component {

  constructor(props) {
    super(props);
    this.chartViewClickHandler = this.chartViewClickHandler.bind(this)
  }

  componentWillMount() {
    this.propsChangeHandler()
  }

  componentWillReceiveProps(props) {
   this.propsChangeHandler(props)
  }

  chartViewClickHandler(e){
    var chartView = e.target.getAttribute('data-chartView');
    if(chartView){
      let aux = Object.assign({}, this.state);
      aux.chartView = chartView;
      this.propsChangeHandler(aux)
    }
  }

  propsChangeHandler(_props){
    const props = _props || this.props;
    this.setState({
      activityNumbers:props.activityNumbers,
      salesReps:props.salesReps,
      chartView:props.chartView
    });
  }

  render(){
    return (
      <div>
        <header className="numbers-header">
          <h1 className="page-title">Activity Numbers</h1>
          <div className="chart-menu" >
             <span onClick={this.chartViewClickHandler}>
              <button type="button" data-chartView='30D' className={this.state.chartView === '30D' ? 'active' : ''}>30D</button>
              <button type="button" data-chartView='90D' className={this.state.chartView === '90D' ? 'active' : ''}>90D</button>
              <button type="button" data-chartView='12M' className={this.state.chartView === '12M' ? 'active' : ''}>12M</button>
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
  'activityNumbers': PropTypes.object.isRequired,
  'salesReps': PropTypes.object.isRequired,
  'chartView': PropTypes.string.isRequired
}

export default connect(mapStateToProps)(Numbers);