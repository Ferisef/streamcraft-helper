import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setHideContribGuard as setHideContribGuardAction } from '../actions/storageActions';

class HideContributionGuard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { checked: props.hideContribGuard };
  }

  componentDidUpdate() {
    const { checked } = this.state;

    document.querySelector('.contribution-guard').style.display = checked ? 'none' : '';
  }

  toggle(event) {
    if (event.target.nodeName === 'SPAN') return;

    this.setState((prev) => {
      const value = !prev.checked;

      const { setHideContribGuard } = this.props;
      setHideContribGuard(value);

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
          <span className="el-checkbox__label">Hide Contribution Guard</span>
        </label>
      </p>
    );
  }
}

HideContributionGuard.propTypes = {
  hideContribGuard: PropTypes.bool.isRequired,
  setHideContribGuard: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  hideContribGuard: store.hideContribGuard,
});

const mapDispatchToProps = dispatch => ({
  setHideContribGuard: value => dispatch(setHideContribGuardAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HideContributionGuard);
