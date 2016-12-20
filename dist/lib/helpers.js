'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUrl = exports.genUniqueString = exports.parsePath = undefined;

var _path = require('path');

var parsePath = exports.parsePath = function parsePath(path) {
  if (!path) {
    return;
  }

  var paths = path.split('/');

  if (paths.length > 1) {
    return {
      filename: paths[paths.length - 1],
      dir: paths.slice(0, path.length - 1).join('/')
    };
  } else if (paths.length == 1) {
    return {
      filename: paths[0]
    };
  }
};

var genUniqueString = exports.genUniqueString = function genUniqueString(salt) {
  return '' + salt + Math.random().toString(36).substr(2, 10);
};

var isUrl = exports.isUrl = function isUrl(str) {
  return new RegExp('^http(s|)://').test(str);
};