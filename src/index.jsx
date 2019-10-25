import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store';
import ManageButton from './components/ManageButton';

import './layouts/Scrollbar.css';
import './layouts/ManageBtn.css';

const element = document.createElement('div');
element.classList.add('manage-st');
document.querySelector('.chat-actions').append(element);

ReactDOM.render(
  <Provider store={createStore()}>
    <ManageButton />
  </Provider>,
  element,
);
