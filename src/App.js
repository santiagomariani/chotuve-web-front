import React from 'react';
import './App.css';
//#import PrivateRoute from './PrivateRoute'
import SignInPage from './SignInPage'
import NoMatchPage from './NoMatchPage'
import DashboardPage from './DashboardPage'
import {Switch,Route} from "react-router-dom";

function App() {
  return (
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
  );
}

export default App;
