'use strict';

function sample(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
exports.sample = sample;
