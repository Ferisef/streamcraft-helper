import React from 'react';
import ReactDOM from 'react-dom';
import StreamCraftHelper from './StreamCraftHelper';

import './layouts/Default.css';

const element = document.createElement('div');
element.classList.add('manage-sh');
document.querySelector('.chat-dialog').append(element);

ReactDOM.render(<StreamCraftHelper />, document.querySelector('.manage-sh'));
