import React from 'react';
import Header from './header/app-header';

let Template = ( props ) => {
  return (
    <div className="container">
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

Template.propTypes = {
  "children": PropTypes.object.isRequired
};

exports.default = Template;