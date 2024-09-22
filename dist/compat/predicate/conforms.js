'use strict';

var conformsTo = require('./conformsTo.js');
var cloneDeep = require('../../object/cloneDeep.js');
function conforms(source) {
  source = cloneDeep.cloneDeep(source);
  return function (object) {
    return conformsTo.conformsTo(object, source);
  };
}
exports.conforms = conforms;
