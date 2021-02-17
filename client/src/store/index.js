  
import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers'


const middleWare = [thunk];

const initialState = {}



const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
                    rootReducer, 
                    initialState, 
                    composeEnhancer(applyMiddleware(...middleWare)))

export default store