import React from 'react';
import './App.css';
//#import PrivateRoute from './PrivateRoute'
import SignInPage from './SignInPage'
import NoMatchPage from './NoMatchPage'
import DashboardPage from './DashboardPage'
import {Switch,Route} from "react-router-dom";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#00e600',
      main: '#00cc00',
      dark: '#008000',
      contrastText: '#ffffff',
    }
  },
});

function App() {
  return (
  <ThemeProvider theme={theme}>
  <Switch>
    <Route path="/dashboard">
      <DashboardPage></DashboardPage>
    </Route>
    <Route exact path="/">
      <SignInPage></SignInPage>
    </Route> 
    <Route>
      <NoMatchPage></NoMatchPage>
    </Route>
  </Switch>
  </ThemeProvider>
  );
}

export default App;
