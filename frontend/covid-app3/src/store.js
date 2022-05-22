import { applyMiddleware, compose, createStore } from "redux";
import reduxPromise from 'redux-promise-middleware';
import thunk from "redux-thunk";





const allEnhancers = compose(
    applyMiddleware(reduxPromise, thunk)
);

export const store = createStore(
    allEnhancers
);