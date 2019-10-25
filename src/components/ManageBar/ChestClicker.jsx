import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleChestClicker as action } from '../../actions/general';
import Checkbox from '../Checkbox';

const LATENCY = 3;

const ChestClicker = ({ state, toggle }) => (
  <p>
    <Checkbox
      name="Chest"
      checked={state.active}
      onChange={(checked) => {
        let { id } = state;

        if (checked) {
          id = setInterval(() => {
            const chest = document.querySelector('.new-chest-bar .chest-icon');
            if (chest) {
              chest.click();
            }
          }, LATENCY);
        } else {
          clearInterval(id);
        }

        toggle(checked, id);
      }}
    />
  </p>
);

ChestClicker.propTypes = {
  state: PropTypes.shape({
    active: PropTypes.bool,
    id: PropTypes.number,
  }).isRequired,
  toggle: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  state: store.chestClicker,
});

const mapDispatchToProps = dispatch => ({
  toggle: (active, id) => dispatch(action(active, id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChestClicker);
