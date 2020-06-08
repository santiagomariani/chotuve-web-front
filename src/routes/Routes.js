import React, {Component} from 'react';
import PrivateRoute from './PrivateRoute'
import SignInPage from 'pages/SignInPage/SignInPage'
import NoMatchPage from 'pages/NoMatchPage/NoMatchPage'
import DashboardPage from 'pages/DashboardPage/DashboardPage'
import ResourcesPage from 'pages/ResourcesPage/ResourcesPage'
import AppServersPage from 'pages/AppServersPage/AppServersPage'
import UsersPage from 'pages/UsersPage/UsersPage'
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

class Routes extends Component {
    render() {
        return (
        <ThemeProvider theme={theme}>
            <Switch>
                <PrivateRoute path="/dashboard">
                    <DashboardPage></DashboardPage>
                </PrivateRoute>
                <PrivateRoute path="/resources">
                    <ResourcesPage></ResourcesPage>
                </PrivateRoute>
                <PrivateRoute path="/app-servers">
                    <AppServersPage></AppServersPage>
                </PrivateRoute>
                <PrivateRoute path="/users">
                    <UsersPage></UsersPage>
                </PrivateRoute>
                <Route exact path="/">
                    <SignInPage></SignInPage>
                </Route> 
                <Route>
                    <NoMatchPage></NoMatchPage>
                </Route>
            </Switch>
        </ThemeProvider>
        )
    }
}

export default Routes;
