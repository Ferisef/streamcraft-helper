import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import ManageButton from './components/ManageButton';

import './layouts/Scrollbar.css';
import './layouts/ManageBtn.css';

const element = document.createElement('div');
element.classList.add('manage-st');
document.querySelector('.chat-dialog').append(element);

ReactDOM.render(
  <Provider store={store}>
    <ManageButton />
  </Provider>,
  document.querySelector('.manage-st'),
);
