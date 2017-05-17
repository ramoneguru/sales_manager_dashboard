/**
 *  Class representing a Sales Teams Activity Efficiency.
 *
 * @author Drew Robinson (hello@drewrobinson.com)
 * @version 0.0.1
 * @exports Efficiency Class
 * @desc Efficiency Report is intented to demonstrate code splitting. In actual application dynamic module would be cached and report state maintained
 */

import React from 'react';
import { connect } from 'react-redux';
import LineChart from '../charts/app-line-chart';
import PropTypes from 'prop-types';

const mapStateToProps = (state, ownProps) => {
  return {
    activityEfficiency: state.ActivityEfficiency,
    salesReps:state.SalesReps,
    reportEnabled: state.reportEnabled
  }
}

class Efficiency extends React.Component {

  constructor(props) {
    super(props);
    this.reportButtonClickHandler = this.reportButtonClickHandler.bind(this);
  }

  componentWillMount() {
    this.propsChangeHandler()
  }

  componentWillReceiveProps(props) {
    this.propsChangeHandler(props)
  }

  propsChangeHandler(_props){
    const props = _props || this.props;
    this.setState({
      activityEfficiency:props.activityEfficiency,
      salesReps:props.salesReps,
      reportEnabled: props.reportEnabled
    });
  }

  reportButtonClickHandler(e){
    if(!this.state.reportEnabled){
      this.setState({
        reportEnabled: true
      },()=>{
        System.import('./app-efficiency-report').then(EfficiencyReport => {
          this.EfficiencyReport = EfficiencyReport
          this.forceUpdate()
        })
      });
    }
  }

  render(){
    return (
      <div>
        <header className="efficiency-header">
          <h1 className="page-title">Activity Efficiency</h1>
        </header>
        <LineChart activityEfficiency={ this.state.activityEfficiency} salesReps={ this.state.salesReps }></LineChart>
        <section className="efficiency-report">
          { this.EfficiencyReport ? <this.EfficiencyReport.default salesReps={ this.state.salesReps }/> : null }
          <button className="efficiency-report__button" onClick={this.reportButtonClickHandler} disabled={this.state.reportEnabled}>Generate Report</button>
        </section>
      </div>
    )
  }
}

Efficiency.propTypes =  {
  'reportEnabled': PropTypes.bool.isRequired
}

Efficiency.defaultProps = {
  'reportEnabled': false
}

export default connect(mapStateToProps)(Efficiency);