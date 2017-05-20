/**
 *
 * @author Drew Robinson (hello@drewrobinson.com)
 * @version 0.0.1
 * @param props
 * @exports EfficiencyReportItem Constructor
 */

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Represents a line item within the efficiency report
 * @param props
 * @returns {XML}
 * @constructor
 * @desc prefer normal functions (not arrow functions) for stateless/refless components over over classes
 */
function EfficiencyReportItem(props){
  return (
    <div className="efficiency-report__item">
      <span className="name">{props.name}</span>
      <span className="dials">{props.dials}</span>
      <span className="connects">{props.connects}</span>
      <span className="opps">{props.opps}</span>
      <span className="deals">{props.deals}</span>
      <span className="dialConnectRatio">{props.dialConnectRatio[0]}:{props.dialConnectRatio[1]}</span>
      <span className="dialOppRatio">{props.dialOppRatio[0]}:{props.dialOppRatio[1]}</span>
      <span className="oppDealRatio">{props.oppDealRatio[0]}:{props.oppDealRatio[1]}</span>
      <span className="dialDealRatio">{props.dialDealRatio[0]}:{props.dialDealRatio[1]}</span>
    </div>
  )
}

EfficiencyReportItem.propTypes = {
  "name"             : PropTypes.string.isRequired,
  "dials"            : PropTypes.number.isRequired,
  "connects"         : PropTypes.number.isRequired,
  "opps"             : PropTypes.number.isRequired,
  "deals"            : PropTypes.number.isRequired,
  "dialConnectRatio" : PropTypes.array.isRequired,
  "dialOppRatio"     : PropTypes.array.isRequired,
  "oppDealRatio"     : PropTypes.array.isRequired,
  "dialDealRatio"    : PropTypes.array.isRequired
};


export default EfficiencyReportItem;
