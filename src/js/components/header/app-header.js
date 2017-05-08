import React from 'react';
import { Link } from 'react-router-dom';
import Button from  './app-header-button';
import classNames from 'classnames';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: 0
    }
    this.menuClickHandler = this.menuClickHandler.bind(this);
  }

  updateMenu(e){
    let menuState = this.state.menu;
    console.log('app-header.js :: updateMenu :: local.state.menu: ' + menuState);
  }
  
  menuClickHandler( e ){
    this.setState(function(prevState){
      let active = ( prevState.menu === 0 ) ? 1 : 0;
      return { menu: active }
    }, this.updateMenu(e) );
  }

  render( ){
    let overlayStyles = classNames('overlay', this.state.menu === 1 ? 'active' : '');
    
    return (
      <div className='header'>
        <Button active={ this.state.menu } handler={ this.menuClickHandler }></Button>
        <div className={ overlayStyles }>
          <div className="app-nav">
            <Link to="/">Activity Numbers</Link>
            <Link to="/efficiency">Activity Efficiency</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;