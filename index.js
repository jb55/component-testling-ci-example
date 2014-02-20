
var traverse = require('traverse');

module.exports = function(el) {
  return traverse('parentNode', el, null, Infinity);
};
