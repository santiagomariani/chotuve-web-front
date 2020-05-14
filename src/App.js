import React from 'react';
import './App.css';
//#import PrivateRoute from './PrivateRoute'
import SignInPage from './pages/SignInPage/SignInPage'
import NoMatchPage from './pages/NoMatchPage/NoMatchPage'
import DashboardPage from './pages/DashboardPage/DashboardPage'
import {Switch,Route} from "react-router-dom";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#00e600',
      main: '#00cc00',
      dark: '#008000',
      contrastText: '#ffffff',
    },
    type: 'dark'
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
