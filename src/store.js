import { createStore, applyMiddleware } from 'redux';
import counter from './ducks/counter';

import promiseMiddleware from 'redux-promise-middleware';

let createStoreWithMiddleware = applyMiddleware(
    promiseMiddleware()
)(createStore)

let store = createStoreWithMiddleware(counter);

// let store = createStore(counter);
export default store;