/**
 *
 * @author Drew Robinson (hello@drewrobinson.com)
 * @version 0.0.1
 * @exports Header Class
 * @desc  Maintains Global Nav Menu State /(HOC) WithRouter
 */

import React from 'react';
import { Link, Router } from 'react-router-dom';
import { connect } from 'react-redux';
import HeaderButton from  './HeaderButton';
import classNames from 'classnames';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

/**
 * Represents application header
 */
class Header extends React.Component {

  /**
   * Binds menuClickHandler method to context of instance
   * Binds updateMenu method to context of instance
   * Invokes updateMenu on url history change event
   * @param props
   */
  constructor(props) {
    super(props);
    this.menuClickHandler = this.menuClickHandler.bind(this)
    this.updateMenu = this.updateMenu.bind(this)

    props.history.listen(()=>{
      this.updateMenu()
    })
  }

  /**
   * Sets local state to closed menu by default
   */
  componentWillMount(){
    this.setState({menu: 0})
  }

  /**
   * Handles menu click event by invoking updateMenu
   * @param e
   */
  menuClickHandler( e ){
    this.updateMenu()
  }

  /**
   * Sets local state based on prev menu state (toggles menu: 0:close, 1:open)
   */
  updateMenu(){
    this.setState(function(prevState){
      let active = ( prevState.menu === 0 ) ? 1 : 0;
      return { menu: active }
    } )
  }

  /**
   * Responsible for render component and determining overlay state
   * @returns {XML}
   */
  render( ){
    let overlayStyles = classNames('overlay', this.state.menu === 1 ? 'active' : '')
    return (
      <header className="header">
        <HeaderButton active={ this.state.menu } handler={ this.menuClickHandler }></HeaderButton>
        <div className={ overlayStyles }>
          <nav className="app-nav">
            <Link to="/" className="app-nav__activity-numbers">Activity Numbers</Link>
            <Link to="/efficiency" className="app-nav__activity-efficiency">Activity Efficiency</Link>
          </nav>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  "history": PropTypes.object.isRequired
};


export default withRouter(Header);

export { Header as PureHeader };