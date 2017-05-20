/**
 * 
 * @author Drew Robinson (hello@drewrobinson.com)
 * @version 0.0.1
 * @param props
 * @exports EfficiencyAnalyis Constructor
 * @desc Demonstrates code splitting. In actual application dynamic module would be cached and report state maintained
 */

import React from 'react';
import EfficiencyReportItem from './EfficiencyReportItem'
import PropTypes from 'prop-types';

/**
 * Represents a sales team's activity efficiency report
 * @param props
 * @returns {XML}
 * @constructor
 * @desc prefer normal functions (not arrow functions) for stateless/refless components over over classes
 */

function EfficiencyReport(props){
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
          <strong className="name">Sales Rep.</strong>
          <strong className="dials">Dials</strong>
          <strong className="connects">Connects</strong>
          <strong className="opps">Opps</strong>
          <strong className="deals">Deals</strong>
          <strong className="dialConnectRatio">Dial : Connect</strong>
          <strong className="dialOppRatio">Dial : Opp</strong>
          <strong className="oppDealRatio">Opp : Deal</strong>
          <strong className="dialDealRatio">Dial : Deal</strong>
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
