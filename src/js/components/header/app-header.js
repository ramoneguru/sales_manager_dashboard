import React from 'react';
import { Link, Router } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from  './app-header-button';
import classNames from 'classnames';
import { withRouter } from 'react-router'

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

//export default Header;
export default withRouter(Header);