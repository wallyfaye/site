import demo from './demo';
import React from 'react';

export default () => {
  const mode = (process.env.NODE_ENV !== 'production') ? demo.demo : 'live';
  return (
    <div>Hello React! {mode}</div>
  )
};
