import demo from './demo';

require('./style.scss');

import React from 'react';
import ReactDOM from 'react-dom';

const g = document.createElement('div');
g.setAttribute("id", "index");
document.body.appendChild(g);

const Index = () => {
  const mode = (process.env.NODE_ENV !== 'production') ? demo.demo : 'live';
  return (
    <div>Hello React! {mode}</div>
  )
}

ReactDOM.render(<Index />, document.getElementById('index'));
