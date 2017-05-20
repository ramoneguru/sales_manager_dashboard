/**
 *  Represents Report Item
 *
 * @author Drew Robinson (hello@drewrobinson.com)
 * @version 0.0.1
 * @param props
 * @exports EfficiencyReportItem Constructor
 */

import React from 'react';

const EfficiencyReportItem = (props) => {
  
  return (
    <div className="efficiency-report__item">
      <span>{props.name}</span>
      <span>{props.dials}</span>
      <span>{props.connects}</span>
      <span>{props.opps}</span>
      <span>{props.deals}</span>
      <span>{props.dialConnectRatio[0]}:{props.dialConnectRatio[1]}</span>
      <span>{props.dialOppRatio[0]}:{props.dialOppRatio[1]}</span>
      <span>{props.oppDealRatio[0]}:{props.oppDealRatio[1]}</span>
      <span>{props.dialDealRatio[0]}:{props.dialDealRatio[1]}</span>
    </div>
  )
}

EfficiencyReportItem.propTypes = {
  "name"             : PropTypes.string.isRequired,
  "dials"            : PropTypes.string.isRequired,
  "connects"         : PropTypes.string.isRequired,
  "opps"             : PropTypes.string.isRequired,
  "deals"            : PropTypes.string.isRequired,
  "dialConnectRatio" : PropTypes.string.isRequired,
  "dialOppRatio"     : PropTypes.string.isRequired,
  "oppDealRatio"     : PropTypes.string.isRequired,
  "dialDealRatio"    : PropTypes.string.isRequired
};


export default EfficiencyReportItem;
