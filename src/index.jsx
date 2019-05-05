import React from 'react';
import ReactDOM from 'react-dom';
import ManageBtn from './components/ManageBtn';

import './layouts/Scrollbar.css';
import './layouts/ManageBtn.css';

const element = document.createElement('div');
element.classList.add('manage-st');
document.querySelector('.chat-dialog').append(element);

ReactDOM.render(<ManageBtn />, document.querySelector('.manage-st'));
