const typedArray = {
  signedInteger: new Int8Array(8),

  unsignedInteger: new Uint8Array(8),

  shortInteger: new Int16Array(16),

  unsignedShortInteger: new Uint16Array(16),

  singnedLongInteger: new Int32Array(32),

  unsignedLongInteger: new Uint32Array(32),

  float_7: new Float32Array(32),

  float_16: new Float64Array(64),

  bigSignedInteger: new BigInt64Array(64),

  bigUnsignedInteger: new BigUint64Array(64),
};

console.log(typedArray);
