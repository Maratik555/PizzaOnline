import {createStore, compose, applyMiddleware} from 'redux'
import reducer from './redusers'
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)))


export default store