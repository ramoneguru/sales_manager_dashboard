/**
 *  Represents Stateless Header Button (Hamburger Icon)
 *
 * @author Drew Robinson (hello@drewrobinson.com)
 * @version 0.0.1
 * @param props
 * @exports Button Constructor
 */

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

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

Button.propTypes = {
  "active"  : PropTypes.number.isRequired,
  "handler" : PropTypes.func.isRequired
};

export default Button;