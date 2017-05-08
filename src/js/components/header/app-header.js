import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';//abstracts store.getState(), dispatch, subscribe -- not currently using this but keeping it here for reference and examples
import classNames from 'classnames';
import Button from  './app-header-button';
import PropTypes from 'prop-types';
import AppActions from '../../actions/app-actions';
import AppConstants from '../../constants/app-constants';

/*
// Example of using connect to map global state to props
 const mapStateToProps = function(state){
   console.log('app-header :: mapStateToProps',state);
   return {
   menu: state.menu,
   }
 }

 // Example of using connect to dispatch actions
 bindActionCreators(AppActions.openMenu(), dispatch)
   const mapDispatchToProps = function (dispatch) {
   console.log('app-header :: dispatch: ');
   return {
     menuClickHandler:() => {
      dispatch(AppActions.openMenu())
     }
   }
 }
 */


class Header extends React.Component {

  constructor(props) {
    super(props);
    this.menuClickHandler = this.menuClickHandler.bind(this);
    this.overlay = null;
    this.state = {
      menu: 0
    }
  }

  //global state change handler
  handleChange(){
    const { store } = this.context;
  }

  componentWillMount(){
    //console.log('Header Component Will Mount');
  }

  componentDidMount(){
    console.log('************ app-header did mount ************* ', this);
    const props = this.props;
    const { store } = this.context;

    /*
     //Example of how to dispatch action to store and modify global state
     const props = this.props;
     const { store } = this.context;
     const state = store.getState();
     store.dispatch(AppActions.openMenu());

     //subscribe callback handleChange to global state change
     this.unsubscribe = store.subscribe(() =>
      this.handleChange()
     );
     */
  }

  componentWillUnmount(){
    //console.log('Header Component Will UnMount');
  }

  updateMenu(e){
    console.log('updateMenu state complete');
    let menuState = this.state.menu;
  }

  //menu click handler updates local state
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

//Add Global Store from Provider to component context
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