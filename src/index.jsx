import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import ManageBtn from './components/ManageBtn';

import './layouts/Scrollbar.css';
import './layouts/ManageBtn.css';

const element = document.createElement('div');
element.classList.add('manage-st');
document.querySelector('.chat-dialog').append(element);

ReactDOM.render(
  <Provider store={store}>
    <ManageBtn />
  </Provider>,
  document.querySelector('.manage-st'),
);
