import React, { useState } from 'react';
import ManageBar from './ManageBar';

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <i
        className="icon set-icon"
        role="button"
        tabIndex={-1}
        onClick={() => {
          setVisible(!visible);
        }}
        onKeyDown={() => {}}
      />
      {visible && <ManageBar />}
    </>
  );
};
