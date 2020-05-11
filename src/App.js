import React from 'react';
import './App.css';
//#import PrivateRoute from './PrivateRoute'
import SignInPage from './SignInPage'
import {Switch,Route} from "react-router-dom";

function App() {
  return (
  <Switch>
    <Route exact path="/">
      <SignInPage></SignInPage>
    </Route> 
    {/*
    <Route>
      <NoMatchPage></NoMatchPage>
    </Route>
    */
    }
  </Switch>
  );
}

export default App;
