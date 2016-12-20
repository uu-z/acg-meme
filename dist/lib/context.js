'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ctx2d = undefined;

var _canvas = require('canvas');

var _canvas2 = _interopRequireDefault(_canvas);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ctx2d = exports.ctx2d = function ctx2d(w, h) {
  var canvas = new _canvas2.default(w, h);
  var ctx = canvas.getContext('2d');
  return ctx;
};