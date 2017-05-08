import React from 'react';
import Button from  './app-header-button';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: 0
    }

    this.menuClickHandler = this.menuClickHandler.bind(this);
  }

  componentWillMount(){}

  componentDidMount(){
    const props = this.props;
    const { store } = this.context;
    
    this.unsubscribe = store.subscribe(() =>
      this.globalStateChangeHandler()
    );
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  globalStateChangeHandler(){
    const { store } = this.context;
    console.log('app-header.js :: globalStateChangeHandler', store.getState())
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
    const props = this.props;
    const { store } = this.context;
    let overlayStyles = classNames('overlay', this.state.menu === 1 ? 'active' : '');
    
    return (
      <div className='header'>
        <Button active={ this.state.menu } handler={ this.menuClickHandler }></Button>
        <div className={ overlayStyles }></div>
      </div>
    );
  }
}

Header.contextTypes = {
  store: PropTypes.object
};

//Example of using propTypes
// Header.propTypes =  {
//   menu: PropTypes.string.isRequired
// }
//
// Header.defaultProps = {
//   menu: 'closed'
// };

export default Header;//connect(mapStateToProps, mapDispatchToProps)(Header);