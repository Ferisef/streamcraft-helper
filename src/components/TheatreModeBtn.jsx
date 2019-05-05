import React from 'react';

import '../layouts/TheatreMode.css';

export default class TheatreModeBtn extends React.Component {
  constructor(props) {
    super(props);

    this.state = { checked: false };
  }

  componentDidUpdate() {
    const { checked } = this.state;

    [
      'contaniner',
      'header',
      'channel-sider',
      'chat-lists',
      'room-wrapper',
      'side-bar',
      'content',
      'channel',
    ].forEach((className) => {
      const { classList } = document.querySelector(`.${className}`);
      if (checked) {
        classList.add(`${className}-fix`);
        return;
      }
      classList.remove(`${className}-fix`);
    });
  }

  toggle(event) {
    if (event.target.nodeName === 'SPAN') return;

    this.setState(prev => ({ checked: !prev.checked }));
  }

  render() {
    const { checked } = this.state;

    const label = `el-checkbox manage-item${checked ? ' is-checked' : ''}`;
    const span = `el-checkbox__input${checked ? ' is-checked' : ''}`;

    return (
      <p>
        <label role="checkbox" className={label} onClick={this.toggle.bind(this)}>
          <span aria-checked="mixed" className={span}>
            <span className="el-checkbox__inner" />
            <input type="checkbox" aria-hidden="true" className="el-checkbox__original" value="" />
          </span>
          <span className="el-checkbox__label">Theatre Mode</span>
        </label>
      </p>
    );
  }
}
