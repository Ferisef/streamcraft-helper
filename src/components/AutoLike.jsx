import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAutoLike as setAutoLikeAction } from '../actions/storageActions';

const LATENCY = 3;

class AutoLike extends React.Component {
  constructor(props) {
    super(props);

    this.state = { checked: props.autoLike.checked };
  }

  toggle(event) {
    if (event.target.nodeName === 'SPAN') return;

    const { autoLike, setAutoLike } = this.props;

    this.setState((prev) => {
      const value = !prev.checked;

      if (value) {
        autoLike.interval = setInterval(() => document.querySelector('.like-icon').click(), LATENCY);
      } else {
        clearInterval(autoLike.interval);
      }

      setAutoLike(value, autoLike.interval);

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
          <span className="el-checkbox__label">Like</span>
        </label>
      </p>
    );
  }
}

AutoLike.propTypes = {
  autoLike: PropTypes.bool.isRequired,
  setAutoLike: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  autoLike: store.autoLike,
});

const mapDispatchToProps = dispatch => ({
  setAutoLike: (value, interval) => dispatch(setAutoLikeAction(value, interval)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AutoLike);
