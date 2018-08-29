import './index.test';

require('./style.scss');

if (process.env.NODE_ENV !== 'production') {
  console.log('dev mode');
}
