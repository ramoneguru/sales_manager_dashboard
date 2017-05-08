import React from 'react';
import Header from './header/app-header';

export default ( props ) => {
  return (
    <div className='container'>
      <Header></Header>
      <section>
        { props.children }
      </section>
      <footer>
       <span>&#x000A9; 2017 Andrew Robinson &#x0003C;hello&#x00040;drewrobinson.com&#x0003E;</span>
      </footer>
    </div>
  )
}