import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
require('./style.scss');

const g = document.createElement('div');
g.setAttribute('id', 'index');
document.body.appendChild(g);

ReactDOM.render(<App />, document.getElementById('index'));
