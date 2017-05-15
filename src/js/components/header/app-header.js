import React from 'react';
import { Link } from 'react-router-dom';
import Button from  './app-header-button';
import classNames from 'classnames';

/**
 * Represents App Header, Nav and Overlay
 */
class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: 0
    }
    this.menuClickHandler = this.menuClickHandler.bind(this);
  }
  
  menuClickHandler( e ){
    this.setState(function(prevState){
      let active = ( prevState.menu === 0 ) ? 1 : 0;
      return { menu: active }
    });
  }

  render( ){
    let overlayStyles = classNames('overlay', this.state.menu === 1 ? 'active' : '');
    
    return (
      <header className='header'>
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

export default Header;