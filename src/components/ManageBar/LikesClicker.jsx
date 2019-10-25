import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleLikeClicker as action } from '../../actions/general';
import Checkbox from '../Checkbox';

const LATENCY = 3;

const LikesClicker = ({ state, toggle }) => (
  <p>
    <Checkbox
      name="Likes"
      checked={state.active}
      onChange={(checked) => {
        let { id } = state;

        if (checked) {
          id = setInterval(() => {
            document.querySelector('.like-icon').click();
          }, LATENCY);
        } else {
          clearInterval(id);
        }

        toggle(checked, id);
      }}
    />
  </p>
);

LikesClicker.propTypes = {
  state: PropTypes.shape({
    active: PropTypes.bool,
    id: PropTypes.number,
  }).isRequired,
  toggle: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  state: store.likesClicker,
});

const mapDispatchToProps = dispatch => ({
  toggle: (active, id) => dispatch(action(active, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LikesClicker);
