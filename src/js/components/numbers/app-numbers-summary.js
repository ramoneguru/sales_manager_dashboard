import React from 'react';
import SummaryItem from './app-numbers-summary-item';

/**
 * Represents stateless list of sales team details
 */
const NumbersSummary = (props) => {

  let summaryItems = Object.keys(props.salesReps).map( key => {

    let data = props.activityNumbers.filter(function(entity){
      return parseInt(entity.repId) === parseInt(key);
    });

    return <SummaryItem key={ key } name={ props.salesReps[key].name } data={data} avatar={ props.salesReps[key].avatar } />
  });
  
  return (
    <div className="rep_summary">
      <div className="rep_summary--header">
        <div>
          <h3>Sales Rep.</h3>
        </div>
        <div>
          <h3>Connect Rate %</h3>
        </div>
      </div>
      {summaryItems}
    </div>
  )
}

NumbersSummary.defaultProps = {
  'activityNumbers': [],
  'salesReps':{}
};

export default NumbersSummary;
