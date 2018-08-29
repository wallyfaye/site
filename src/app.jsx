import demo from './demo';
import React from 'react';

export default () => {
  const mode = (process.env.NODE_ENV !== 'production') ? demo.demo : 'live';
  console.log('app.jsx')
  return (
    <div>
      <div className="demo">Hello React! {mode}</div>
    </div>
  )
};
