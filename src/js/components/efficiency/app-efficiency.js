/**
 *  Class representing a Sales Teams Activity Efficiency Ratios.
 *
 * @author Drew Robinson (hello@drewrobinson.com)
 * @version 0.0.1
 * @exports Efficiency Class
 */

import React from 'react';
import { connect } from 'react-redux';
import LineChart from '../charts/app-line-chart';
import PropTypes from 'prop-types';

const mapStateToProps = (state, ownProps) => {
  return {
    activityEfficiency: state.ActivityEfficiency,
    salesReps:state.SalesReps
  }
}

class Efficiency extends React.Component {

  constructor(props) {
    super(props);
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
      salesReps:props.salesReps
    });
  }

  render(){
    return (
      <div>
        <header className="efficiency-header">
          <h1 className="page-title">Activity Efficiency</h1>
        </header>
        <LineChart activityEfficiency={ this.state.activityEfficiency} salesReps={ this.state.salesReps }></LineChart>
      </div>
    )
  }
}

Efficiency.propTypes =  {
  'activityEfficiency': PropTypes.object.isRequired,
  'salesReps': PropTypes.object.isRequired
}

export default connect(mapStateToProps)(Efficiency);