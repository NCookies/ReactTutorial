
'use strict';

var base64 = require('base64-js');

function binaryToBase64(data) {
  if (data instanceof ArrayBuffer) {
    data = new Uint8Array(data);
  }
  if (data instanceof Uint8Array) {
    return base64.fromByteArray(data);
  }
  if (!ArrayBuffer.isView(data)) {
    throw new Error('data must be ArrayBuffer or typed array');
  }
  var _data = data,
      buffer = _data.buffer,
      byteOffset = _data.byteOffset,
      byteLength = _data.byteLength;

  return base64.fromByteArray(new Uint8Array(buffer, byteOffset, byteLength));
}

module.exports = binaryToBase64;