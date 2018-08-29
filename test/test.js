const context = require.context('.', true, /.+\.test\.js?$/);
context.keys().forEach(context);
require('./index.test');

module.exports = context;
