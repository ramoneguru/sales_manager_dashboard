/**
 *
 * @author Drew Robinson (hello@drewrobinson.com)
 * @version 0.0.1
 * @param props
 * @exports NumbersSummary Class
 */

import React from 'react';
import SummaryItem from './SummaryItem';
import PropTypes from 'prop-types';

/**
 * Reresents summary for sales teams number of activities
 * @param props
 * @returns {XML}
 * @constructor
 * @desc prefer normal functions (not arrow functions) for stateless/refless components over over classes
 */
function NumbersSummary( props ) {
  let summaryItems = Object.keys(props.salesReps).map( key => {
    let data = props.activityNumbers.filter(function(entity){
      return parseInt(entity.repId) === parseInt(key);
    });

    return <SummaryItem key={ key } name={ props.salesReps[key].name } data={data} avatar={ props.salesReps[key].avatar } />
  });
  
  return (
    <div className="rep-summary">
      <div className="rep-summary__header">
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

NumbersSummary.propTypes =  {
  'activityNumbers' : PropTypes.array.isRequired,
  'salesReps'       : PropTypes.object.isRequired
}

NumbersSummary.defaultProps = {
  'activityNumbers' : [],
  'salesReps'       : {}
};

export default NumbersSummary;
