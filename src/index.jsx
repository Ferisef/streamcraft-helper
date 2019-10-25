import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from './store';
import ManageButton from './components/ManageButton';

import './layouts/Scrollbar.css';
import './layouts/ManageBtn.css';

const div = document.createElement('div');
div.classList.add('manage-st');

try {
  document.querySelector('.chat-actions').append(div);

  ReactDOM.render(
    <Provider store={createStore()}>
      <ManageButton />
    </Provider>,
    div,
  );
} catch (e) {
  console.log('Cannot attach StreamCraft Settings to ChatActions.');
}
