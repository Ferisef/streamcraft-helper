import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleTheatreMode as action } from '../../actions/general';
import Checkbox from '../Checkbox';

import '../../layouts/TheatreMode.css';

const TheatreMode = ({ isActive, toggle }) => (
  <p>
    <Checkbox
      name="Theatre Mode"
      checked={isActive}
      onChange={(checked) => {
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

        toggle(checked);
      }}
    />
  </p>
);

TheatreMode.propTypes = {
  isActive: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  isActive: store.theatreMode,
});

const mapDispatchToProps = dispatch => ({
  toggle: value => dispatch(action(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TheatreMode);
