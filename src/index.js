import demo from './demo';

require('./style.scss');

if (process.env.NODE_ENV !== 'production') {
  console.log(demo);
}

console.log(demo.demo);
