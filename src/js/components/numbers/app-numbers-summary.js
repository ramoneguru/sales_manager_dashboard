import React from 'react';
import SummaryItem from './app-numbers-summary-item';

const NumbersSummary = (props) => {
  //console.log('props 0: ', props);
  let summaryItems = Object.keys(props['sales-reps']).map( key => {

    let data = props['primary-data'].filter(function(entity){
      return parseInt(entity.repId) === parseInt(key);
    })

    return <SummaryItem key={ key }
                        name={ props['sales-reps'][key].name }
                        data={data}
                        avatar={ props['sales-reps'][key].avatar } />
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
export default NumbersSummary;
