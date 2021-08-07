// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import * as sessionActions from "./store/session";
import Images from "./components/Image"
import LandingPage from "./components/LandingPage";
import Stays from "./components/Stays";
import Reviews from './components/Reviews';
import ReviewForm from "./components/ReviewForm";

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
        <Reviews />
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

      <Route path={`/review/:id`}>
        <ReviewForm /> 
      </Route>
     
      <Route path='/reviews/:id'>
        <Reviews /> 
      </Route>
    

    </Switch>
    )}
    </>
  );
}

export default App;