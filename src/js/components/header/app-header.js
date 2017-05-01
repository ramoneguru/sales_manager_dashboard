import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import AppBar from 'material-ui/AppBar';

let style = {
  fontFamily:'Lato, Roboto, sans-serif'
}

const Header = (props) => (
  <AppBar
    title="Sales Activity"
    className="mui--appbar-textAlign"
    style={style}
  />
);

export default muiThemeable()(Header);
