/* eslint-disable import/no-extraneous-dependencies */

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import storageReducer from '../reducers/storageReducer';

const store = createStore(storageReducer, composeWithDevTools());

export default store;
