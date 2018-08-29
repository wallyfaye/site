const context = require.context('.', true, /.+\.test\.?$/);
context.keys().forEach(context);

module.exports = context;
