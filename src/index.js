import React from 'react';
import ReactDOM from 'react-dom';
import StreamcraftHelper from './StreamcraftHelper';

const element = document.createElement('div');

element.classList.add('manage-sh');

const { style } = element;
style.position = 'absolute';
style.bottom = '8px';
style.left = '37px';
style.width = '24px';
style.height = '24px';

document.querySelector('.chat-dialog').append(element);

ReactDOM.render(<StreamcraftHelper />, document.querySelector('.manage-sh'));
