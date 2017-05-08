import React from 'react';
import classNames from 'classnames';

const Button = (props) => {
  var styles = classNames('button', props.active === 1 ? 'active' : '');

  return (
    <div className={styles} onClick={props.handler}>
      <div className="bar bar1"></div>
      <div className="bar bar2"></div>
      <div className="bar bar3"></div>
    </div>
  )
}

export default Button;