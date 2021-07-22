// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import * as sessionActions from "./store/session";
import Images from "./components/Image"
import LandingPage from "./components/LandingPage";
import Stays from "./components/Stays";


function App() {
  
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
 
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
  <>
    <Navigation isLoaded={isLoaded}/>
    {isLoaded && (
    <Switch>
      <Route exact path='/'>
        <LandingPage />
        <Images />
      </Route>
      <Route path="/login">
        <LoginFormPage />
      </Route>
      <Route path='/signup'>
        <SignupFormPage />
      </Route>
      <Route exact path='/stays/'>
        <Images /> 
      </Route>
      
      <Route path='/stays/:id'>
        <Stays /> 
      </Route>

    

    </Switch>
    )}
    </>
  );
}

export default App;