import React, { Component } from 'react';
import './App.css';
import logo from './images/Logo_lidersmall.png';
import { MuiThemeProvider,createMuiTheme } from 'material-ui/styles';

import FullWidthTabs from './components/Tabs'


const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#439889',
      main: '#00695c',
      dark: '#003d33',
      contrastText: '#fff',
    },
  },
});

class App extends Component {

  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <div className="App">
        <img src={logo} alt="logo" style={{paddingBottom: 20,}}/>
        <FullWidthTabs />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
