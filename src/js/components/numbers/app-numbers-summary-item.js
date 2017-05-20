/**
 *  Represents Stateless Summary Item of an Individual Sales Rep. Details
 *
 * @author Drew Robinson (hello@drewrobinson.com)
 * @version 0.0.1
 * @param props
 * @exports SummaryItem Constructor
 */

import React from 'react';
import AppConstants from '../../constants/app-constants';

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

SummaryItem.propTypes = {
  "name"   : PropTypes.string.isRequired,
  "avatar" : PropTypes.string.isRequired,
  "data"   : PropTypes.array.isRequired
};

export default SummaryItem;
