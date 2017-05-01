import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import gcpDashboardTheme from '../styles/app-theme'
import Template from './app-template';
injectTapEventPlugin();
export default () => {
  return (
    <MuiThemeProvider muiTheme={gcpDashboardTheme}>
      <Template ></Template>
    </MuiThemeProvider>
  )
}