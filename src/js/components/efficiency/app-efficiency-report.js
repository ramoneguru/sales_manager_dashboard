/**
 *  Represents Sales Team Efficiency Report
 *
 *
 * @author Drew Robinson (hello@drewrobinson.com)
 * @version 0.0.1
 * @param props
 * @exports EfficiencyAnalyis Constructor
 * @desc Efficiency Report is intented to demonstrate code splitting. In actual application dynamic module would be cached and report state maintained
 */

import React from 'react';
import EfficiencyReportItem from './app-efficiency-report-item'
import PropTypes from 'prop-types';

const EfficiencyReport = (props) => {

  let report = Object.keys(props.salesReps.entities).map( key => {

    return <EfficiencyReportItem
      key={ key }
      name={ props.salesReps.entities[key].name }
      dials={ props.salesReps.entities[key].report.dials }
      connects={ props.salesReps.entities[key].report.connects }
      opps={ props.salesReps.entities[key].report.opps }
      deals={ props.salesReps.entities[key].report.deals }
      dialConnectRatio={ props.salesReps.entities[key].report.dialConnectRatio }
      dialOppRatio={ props.salesReps.entities[key].report.dialOppRatio }
      oppDealRatio={ props.salesReps.entities[key].report.oppDealRatio }
      dialDealRatio={ props.salesReps.entities[key].report.dialDealRatio }/>
  });

  return (
    <div className="wrap">
      <div>
        <h3>Efficiency Report</h3>
        <div className="efficiency-report__header">
          <strong>Sales Rep.</strong>
          <strong>Dials</strong>
          <strong>Connects</strong>
          <strong>Opps</strong>
          <strong>Deals</strong>
          <strong>Dial : Connect</strong>
          <strong>Dial : Opp</strong>
          <strong>Opp : Deal</strong>
          <strong>Dial : Deal</strong>
        </div>
        {report}
      </div>
    </div>
  )
}

EfficiencyReport.propTypes =  {
  'salesReps': PropTypes.object.isRequired
}

EfficiencyReport.defaultProps = {
  'salesReps': {}
};


export default EfficiencyReport;
