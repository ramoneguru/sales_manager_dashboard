import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Button from  './app-header-button';
import AppActions from '../../actions/app-actions';
import AppConstants from '../../constants/app-constants';
import PropTypes from 'prop-types';

const mapStateToProps = function(state){
  console.log('mapStateToProps',state);
  return {
    first: 'andrew',
  }
}

const mapDispatchToProps = function (dispatch) {
  console.log('mapDispathcToProps',dispatch);
  return bindActionCreators({
    last: 'robinson',
  }, dispatch)
}

class Header extends React.Component {

  constructor(props) {
    console.log('app-header constructor props: ',props);
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.overlay = null;
  }

  componentWillMount(){
    //console.log('Header Component Will Mount');
  }

  componentDidMount(){
    console.log('************ app-header did mount *************');
    //console.log('Header Component Did Mount');
    this.overlay = document.querySelector('.overlay');

    // function handleChange() {
    //   let previousValue = currentValue
    //   currentValue = select(store.getState())
    //
    //   if (previousValue !== currentValue) {
    //     console.log('Some deep nested property changed from', previousValue, 'to', currentValue)
    //   }
    // }
    //
    // let unsubscribe = store.subscribe(handleChange)
    //
    // console.log('store.getState().menu',store.getState().menu);
    //unsubscribe()
  }

  componentWillUnmount(){
    //console.log('Header Component Will UnMount');
  }
  // AppActions.toggleHeaderMenu.bind(null, props.menu)

  clickHandler( e ){
    let button = e.target,
      isOpen = button.classList.toggle('change');

    if(isOpen){
      this.overlay.classList.add('show');
    }else{
      this.overlay.classList.remove('show');
    }
  }

  render( props ){
    console.log('header render props: ', props);
    return (
      <div className='header'>
        <Button className='button' handler={ this.clickHandler }></Button>
        <div className='overlay'></div>
      </div>
    );
  }
}

Header.propTypes =  {
  menu: PropTypes.string.isRequired
}

Header.defaultProps = {
  menu: 'closed'
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);