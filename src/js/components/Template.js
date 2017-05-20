import React from 'react';
import Header from './header/Header';
import PropTypes from 'prop-types';

/**
 * Represents Template for application page layout
 * @param props
 * @returns {XML}
 * @constructor
 * @desc prefer normal functions (not arrow functions) for stateless/refless components over over classes
 */
function Template(props){
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

export default Template;