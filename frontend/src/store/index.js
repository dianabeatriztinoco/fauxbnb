import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import  thunk  from 'redux-thunk';
import sessionReducer from "./session";
import imageReducer from "./images";
import reviewReducer from "./reviews";
import staysReducer from "./stays";

// when created an empty object is passed into to the combineReducer helper function. Here we will house all of our reducers. Reducers are the building blocks of Redux. 
// every redux app has state values, create action to describe what happens and uses reducers function to calculate new state values based on the prev state and an action 
// a reducer is a function in react that determines changes to an application state. uses the action it recieves to determine that change. Redux helps manage an apps state changes in a single store


const rootReducer = combineReducers({
    session: sessionReducer, 
    images: imageReducer, 
    reviews: reviewReducer, 
    stays: staysReducer
    
  });

// a redux store enhancer is a high order function that take createStore and return a new enhanced version of createStore 
// createStore is a store creator redux method that takes in a reducer, preloadedState and enhancer

let enhancer;

if(process.env.NODE_ENV === 'production') {
    enhancer = applyMiddleware(thunk);
} else {
    const logger = require('redux-logger').default;
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

// accepts a single configuration object parameter. it is a friendly abstraction ove rthe standard createStore funciton that adds a good default to the store setup for better development experience 
const configureStore = (preloadedState) => {

    return createStore(rootReducer, preloadedState, enhancer);
  };
  
  export default configureStore;