import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleLikesAnimVisibility as action } from '../../actions/general';
import Checkbox from '../Checkbox';

const HideLikesAnimation = ({ isActive, toggle }) => (
  <p>
    <Checkbox
      name="Hide Likes Animation"
      checked={isActive}
      onChange={(checked) => {
        document.querySelector('.hearts').style.display = checked ? 'none' : '';

        toggle(checked);
      }}
    />
  </p>
);

HideLikesAnimation.propTypes = {
  isActive: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  isActive: store.hideLikesAnim,
});

const mapDispatchToProps = dispatch => ({
  toggle: value => dispatch(action(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HideLikesAnimation);
