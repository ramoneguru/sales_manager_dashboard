/**
 *
 * @author Drew Robinson (hello@drewrobinson.com)
 * @version 0.0.1
 * @param props
 * @exports SummaryItem Constructor
 */

import React from 'react';
import Constants from '../../constants/constants';
import PropTypes from 'prop-types';

/**
 * Represents a summary of an indivdual sales rep number of activities
 * @param props
 * @returns {XML}
 * @constructor
 * @desc prefer normal functions (not arrow functions) for stateless/refless components over over classes
 */
function SummaryItem( props ) {
  let rate = 0;
  let src = `${Constants.PROTOCOL}//${Constants.HOST}/images/${props.avatar}`

  if(props.data.length > 0){
    let perc = (props.data[0]['12M'][2]/(props.data[0]['12M'][0] + props.data[0]['12M'][1])).toFixed(2);
    rate = perc * 100;
  }
  return (
    <div className="rep-summary__item">
        <figure>
          <span><img src={src} alt={props.name} role="presentation"/></span>
          <figcaption>{props.name}</figcaption>
        </figure>
        <span>{rate}%</span>
    </div>
  )
}

SummaryItem.propTypes = {
  "name"   : PropTypes.string.isRequired,
  "avatar" : PropTypes.string.isRequired,
  "data"   : PropTypes.array.isRequired
};

export default SummaryItem;
