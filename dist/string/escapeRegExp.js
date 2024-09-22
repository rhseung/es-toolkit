'use strict';

function escapeRegExp(str) {
  return str.replace(/[\\^$.*+?()[\]{}|]/g, '\\$&');
}
exports.escapeRegExp = escapeRegExp;
