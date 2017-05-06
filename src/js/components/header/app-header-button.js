import React from 'react';

const Button = ( props ) => {
  return (
    <div className="button" onClick={props.handler}>
      <div className="bar bar1"></div>
      <div className="bar bar2"></div>
      <div className="bar bar3"></div>
    </div>
  )
}

export default Button;