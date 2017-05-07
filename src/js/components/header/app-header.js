import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';//abstracts store.getState(), dispatch, subscribe -- not currently using this but keeping it here for reference and examples

import Button from  './app-header-button';
import AppActions from '../../actions/app-actions';
import AppConstants from '../../constants/app-constants';
import PropTypes from 'prop-types';

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
      menu: -1
    }
  }

  //global state change handler
  handleChange(){
    const { store } = this.context;
    console.log('store.getState(): ', store.getState());
  }

  componentWillMount(){
    //console.log('Header Component Will Mount');
  }

  componentDidMount(){
    console.log('************ app-header did mount ************* ', this);
    const props = this.props;
    const { store } = this.context;
    const state = store.getState();

    this.overlay = document.querySelector('.overlay');


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

  //menu click handler updates local state
  menuClickHandler( e ){
    console.log('app-header :: clickHandler');


    // if(this.props.menu === -1){
    //   console.log('menu was closed try to open it')
    //   store.dispatch({
    //     type: AppConstants.OPEN_MENU
    //   });
    // }
    // let button = e.target,
    //   isOpen = button.classList.toggle('change');
    //
    // if(isOpen){
    //   this.overlay.classList.add('show');
    // }else{
    //   this.overlay.classList.remove('show');
    // }
  }

  render( ){
    console.log('app-header :: render: ');
    const props = this.props;
    const { store } = this.context;
    const state = store.getState();

    return (
      <div className='header'>
        <Button className='button' handler={ this.menuClickHandler }></Button>
        <div className='overlay'></div>
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