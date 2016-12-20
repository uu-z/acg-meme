'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var drawText = exports.drawText = function drawText(ctx, pos, text) {
  var _ctx$canvas = ctx.canvas,
      height = _ctx$canvas.height,
      width = _ctx$canvas.width;

  var fontSize = computeFontSize(width, text.length);
  ctx.font = 'bold ' + fontSize + 'px Impact';
  ctx.textAlign = "center";
  ctx.fillStyle = '#fff';
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 5;

  var y = void 0;
  if (pos == "top") {
    y = fontSize + 15;
  } else if (pos == "bottom") {
    y = height - (15 + fontSize);
  }

  ctx.strokeText(text, width / 2, y);
  ctx.fillText(text, width / 2, y);

  return ctx;
};

var computeFontSize = function computeFontSize(width, count) {
  return (width - 30) / count / 2;
};