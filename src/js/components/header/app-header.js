/**
 *  Class representing a App Header.
 *
 * @author Drew Robinson (hello@drewrobinson.com)
 * @version 0.0.1
 * @desc  Maintains Global Nav Menu State /(HOC) WithRouter
 * @exports Header Class
 */

import React from 'react';
import { Link, Router } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from  './app-header-button';
import classNames from 'classnames';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.menuClickHandler = this.menuClickHandler.bind(this)
    this.updateMenu = this.updateMenu.bind(this)

    props.history.listen(()=>{
      this.updateMenu()
    })
  }

  componentWillMount(){
    this.setState({menu: 0})
  }

  menuClickHandler( e ){
    this.updateMenu()
  }

  updateMenu(){
    this.setState(function(prevState){
      let active = ( prevState.menu === 0 ) ? 1 : 0;
      return { menu: active }
    } )
  }

  render( ){
    let overlayStyles = classNames('overlay', this.state.menu === 1 ? 'active' : '')
    return (
      <header className="header">
        <Button active={ this.state.menu } handler={ this.menuClickHandler }></Button>
        <div className={ overlayStyles }>
          <nav className="app-nav">
            <Link to="/">Activity Numbers</Link>
            <Link to="/efficiency">Activity Efficiency</Link>
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