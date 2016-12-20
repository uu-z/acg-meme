'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _image = require('./image');

Object.defineProperty(exports, 'get', {
  enumerable: true,
  get: function get() {
    return _image.get;
  }
});
Object.defineProperty(exports, 'save', {
  enumerable: true,
  get: function get() {
    return _image.save;
  }
});

var _text = require('./text');

Object.defineProperty(exports, 'drawText', {
  enumerable: true,
  get: function get() {
    return _text.drawText;
  }
});