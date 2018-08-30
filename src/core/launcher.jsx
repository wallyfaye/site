import React from 'react';

require('./core.sss');

export default ({ block = 'core' }) => {
  const mode = (process.env.NODE_ENV !== 'production') ? 'development' : 'production';
  const blockElement = block + "__mode-name";
  const blockElementModifier = blockElement + "_" + mode;
  return (
    <div className={blockElement + " " + blockElementModifier}>{mode}</div>
  )
};
