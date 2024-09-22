'use strict';

var htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};
function escape(str) {
  return str.replace(/[&<>"']/g, function (match) {
    return htmlEscapes[match];
  });
}
exports.escape = escape;
