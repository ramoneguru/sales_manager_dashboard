import React from 'react';
import AppConstants from '../../constants/app-constants';

/**
 * Represents stateless list item of an individual sales rep. details
 * @param props
 * @returns {XML}
 * @constructor
 */
const SummaryItem = (props) => {
  let rate = 0;
  let src = `${AppConstants.PROTOCOL}//${AppConstants.HOST}/images/${props.avatar}`

  if(props.data.length > 0){
    let perc = (props.data[0]['12M'][2]/(props.data[0]['12M'][0] + props.data[0]['12M'][1])).toFixed(2);
    rate = perc * 100;
  }
  return (
    <div className="rep-summary__item">
        <figure>
          <span><img src={src} /></span>
          <figcaption>{props.name}</figcaption>
        </figure>
        <span>{rate}%</span>
    </div>
  )
}

export default SummaryItem;
