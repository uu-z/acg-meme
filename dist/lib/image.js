'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveFromPath = exports.save = exports.get = exports.getAndRead = undefined;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _canvas = require('canvas');

var _canvas2 = _interopRequireDefault(_canvas);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _context4 = require('./context');

var _helpers = require('./helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var getAndRead = exports.getAndRead = function () {
  var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(url) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', new Promise(function (resolve, reject) {
              _http2.default.get(url, function (res) {
                var data = '';
                res.setEncoding('binary');
                res.on('data', function (chunk) {
                  data += chunk;
                });
                res.on('end', function () {

                  resolve(loadImage(data));
                });
              });
            }));

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function getAndRead(_x) {
    return _ref.apply(this, arguments);
  };
}();

var loadImage = function loadImage(buf) {
  var img = new _canvas2.default.Image();

  img.onload = function () {
    console.log('onload');
  };
  img.onerror = function (err) {
    console.log(err);
  };

  img.src = new Buffer(buf, 'binary');

  var ctx = (0, _context4.ctx2d)(img.width, img.height);
  ctx.drawImage(img, 0, 0, img.width, img.height);

  return ctx;
};

var readFile = function readFile(filename) {
  console.log('read file');
  return new Promise(function (resolve, reject) {
    _fs2.default.readFile(filename, function (error, data) {
      if (error) reject(error);

      resolve(loadImage(data));
    });
  });
};

var get = exports.get = function () {
  var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(path) {
    var method, ctx;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log('get url');
            method = (0, _helpers.isUrl)(path) ? getAndRead : readFile;
            _context2.next = 4;
            return method(path);

          case 4:
            ctx = _context2.sent;
            return _context2.abrupt('return', ctx);

          case 6:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function get(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var save = exports.save = function save(ctx, path) {
  var _ref3 = (0, _helpers.parsePath)(path) || {},
      _ref3$filename = _ref3.filename,
      filename = _ref3$filename === undefined ? (0, _helpers.genUniqueString)('meme-') : _ref3$filename,
      _ref3$dir = _ref3.dir,
      dir = _ref3$dir === undefined ? process.cwd() : _ref3$dir;

  console.log(dir);
  if (!_fs2.default.existsSync(dir)) {
    _fs2.default.mkdirSync(dir);
  }

  saveFromPath(ctx, dir + '/' + filename + '.jpeg');
};

var saveFromPath = exports.saveFromPath = function () {
  var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(ctx, path) {
    var out, stream;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            console.log('save from path');
            out = _fs2.default.createWriteStream(path);
            stream = ctx.canvas.createJPEGStream();


            stream.on('data', function (chunk) {
              out.write(chunk);
            }).on('end', function () {
              out.end();
            });

          case 4:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, undefined);
  }));

  return function saveFromPath(_x3, _x4) {
    return _ref4.apply(this, arguments);
  };
}();