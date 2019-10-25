/* eslint-disable import/no-extraneous-dependencies */

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers/genaral';

const isProd = process.env.NODE_ENV === 'production';

export default () => {
  if (isProd && false) {
    return createStore(reducer);
  }

  return createStore(reducer, composeWithDevTools());
};
