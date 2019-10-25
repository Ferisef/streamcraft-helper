import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const Checkbox = ({ name, checked, onChange }) => {
  const [isChecked, setChecked] = useState(checked);

  useEffect(() => {
    if (checked === isChecked) {
      return;
    }

    if (onChange) {
      onChange(isChecked);
    }
  }, [isChecked]);

  return (
    <label
      role="checkbox"
      className={classnames('el-checkbox', 'manage-item', { 'is-checked': isChecked })}
      onClick={(e) => {
        if (e.target.nodeName === 'SPAN') {
          return;
        }

        setChecked(!isChecked);
      }}
    >
      <span
        aria-checked="mixed"
        className={classnames('el-checkbox__input', { 'is-checked': isChecked })}
      >
        <span className="el-checkbox__inner" />
        <input type="checkbox" aria-hidden="true" className="el-checkbox__original" value="" />
      </span>
      <span className="el-checkbox__label">{name}</span>
    </label>
  );
};

Checkbox.defaultProps = {
  name: '',
  checked: false,
  onChange: null,
};

Checkbox.propTypes = {
  name: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Checkbox;
