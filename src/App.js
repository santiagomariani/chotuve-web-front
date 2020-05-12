import React from 'react';
import './App.css';
//#import PrivateRoute from './PrivateRoute'
import SignInPage from './SignInPage'
import NoMatchPage from './NoMatchPage'
import {Switch,Route} from "react-router-dom";

function App() {
  return (
  <Switch>
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
