import React from 'react';
import Button from  './app-header-button';


class Header extends React.Component {

  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.overlay = null;
  }

  clickHandler( e ){
    let button = e.target,
      isOpen = button.classList.toggle('change');

    if(isOpen){
      this.overlay.classList.add('show');
      }else{
      this.overlay.classList.remove('show');
    }
  }

  componentWillMount(){
    console.log('Header Component Will Mount');
  }

  componentDidMount(){
    console.log('Header Component Did Mount');
    this.overlay = document.querySelector('.overlay');
  }

  componentWillUnmount(){
    console.log('Header Component Will UnMount');
  }

  render( props ){
    return (
      <div className='header'>
        <Button className='button' handler={this.clickHandler}></Button>
        <div className='overlay'></div>
      </div>
    );
  }
}

export default Header;