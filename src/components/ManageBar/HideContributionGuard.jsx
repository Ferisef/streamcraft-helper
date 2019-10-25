import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { toggleContribGuardVisibility as action } from '../../actions/general';
import Checkbox from '../Checkbox';

const HideContributionGuard = ({ isActive, toggle }) => (
  <p>
    <Checkbox
      name="Hide Contrib Guard"
      checked={isActive}
      onChange={(checked) => {
        document.querySelector('.contribution-guard').style.display = checked ? 'none' : '';

        toggle(checked);
      }}
    />
  </p>
);

HideContributionGuard.propTypes = {
  isActive: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  isActive: store.hideContribGuard,
});

const mapDispatchToProps = dispatch => ({
  toggle: value => dispatch(action(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HideContributionGuard);
