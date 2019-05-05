import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setTheatreMode as setTheatreModeAction } from '../actions/storageActions';

import '../layouts/TheatreMode.css';

class TheatreMode extends React.Component {
  constructor(props) {
    super(props);

    this.state = { checked: props.theatreMode };
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

    this.setState((prev) => {
      const value = !prev.checked;

      const { setTheatreMode } = this.props;
      setTheatreMode(value);

      return { checked: !prev.checked };
    });
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

TheatreMode.propTypes = {
  theatreMode: PropTypes.bool.isRequired,
  setTheatreMode: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  theatreMode: store.theatreMode,
});

const mapDispatchToProps = dispatch => ({
  setTheatreMode: value => dispatch(setTheatreModeAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TheatreMode);
