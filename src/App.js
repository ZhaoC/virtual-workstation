import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TabHeaders from './navigator/TabHeaders';

const App = () => (
  <MuiThemeProvider>
    <TabHeaders/>
  </MuiThemeProvider>
);

export default App;
