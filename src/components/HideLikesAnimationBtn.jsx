import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setHideLikesAnim as setHideLikesAnimAction } from '../actions/storageActions';

class HideLikesAnimationBtn extends React.Component {
  constructor(props) {
    super(props);

    this.state = { checked: props.hideLikesAnim };
  }

  componentDidUpdate() {
    const { checked } = this.state;

    document.querySelector('.hearts').style.display = checked ? 'none' : '';
  }

  toggle(event) {
    if (event.target.nodeName === 'SPAN') return;

    this.setState((prev) => {
      const value = !prev.checked;

      const { setHideLikesAnim } = this.props;
      setHideLikesAnim(value);

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
          <span className="el-checkbox__label">Hide Likes Animation</span>
        </label>
      </p>
    );
  }
}

HideLikesAnimationBtn.propTypes = {
  hideLikesAnim: PropTypes.bool.isRequired,
  setHideLikesAnim: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  hideLikesAnim: store.hideLikesAnim,
});

const mapDispatchToProps = dispatch => ({
  setHideLikesAnim: value => dispatch(setHideLikesAnimAction(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HideLikesAnimationBtn);
