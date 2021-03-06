import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers/genaral';

const isProd = process.env.NODE_ENV === 'production';

export default () => {
  if (isProd) {
    return createStore(reducer);
  }

  return createStore(reducer, composeWithDevTools());
};
