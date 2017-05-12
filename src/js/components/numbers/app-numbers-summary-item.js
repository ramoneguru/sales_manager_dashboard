import React from 'react';
import AppConstants from '../../constants/app-constants';

const SummaryItem = (props) => {
  let rate = 0;

  if(props.data.length > 0){
    let perc = (props.data[0]['12M'][2]/(props.data[0]['12M'][0] + props.data[0]['12M'][1])).toFixed(2);
    rate = perc * 100;
    //console.log(rate)
  }


  let src = `${AppConstants.PROTOCOL}//${AppConstants.HOST}/images/${props.avatar}`
  
  return (
    <div className="rep_summary--item">
        <figure>
          <span><img src={src} /></span>
          <figcaption>{props.name}</figcaption>
        </figure>
        <span>{rate}%</span>
    </div>
  )
}

export default SummaryItem;
