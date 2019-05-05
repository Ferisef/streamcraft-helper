import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAutoOpenChest as setAutoOpenChestAction } from '../actions/storageActions';

const LATENCY = 3;

class AutoOpenChestBtn extends React.Component {
  constructor(props) {
    super(props);

    this.state = { checked: props.autoOpenChest.checked };
  }

  toggle(event) {
    if (event.target.nodeName === 'SPAN') return;

    const { autoOpenChest, setAutoOpenChest } = this.props;

    this.setState((prev) => {
      const value = !prev.checked;

      // if (value) {
      //   autoOpenChest.interval = setInterval(() => document.querySelector('.chest').click(), LATENCY);
      // } else {
      //   clearInterval(autoOpenChest.interval);
      // }

      console.log('WIP');

      setAutoOpenChest(value, autoOpenChest.interval);

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
          <span className="el-checkbox__label">Chest</span>
        </label>
      </p>
    );
  }
}

AutoOpenChestBtn.propTypes = {
  autoOpenChest: PropTypes.bool.isRequired,
  setAutoOpenChest: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  autoOpenChest: store.autoOpenChest,
});

const mapDispatchToProps = dispatch => ({
  setAutoOpenChest: (value, interval) => dispatch(setAutoOpenChestAction(value, interval)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AutoOpenChestBtn);
