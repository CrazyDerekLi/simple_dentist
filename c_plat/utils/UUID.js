var UUID = {
  uuid4: function(){
    return this._uuid(
      this.randomInt(), this.randomInt(),
      this.randomInt(), this.randomInt(), 4);
  },
  _uuid: function(w1, w2, w3, w4, version){
    var uuid = new Array(32);
    var data = [
      (w1 & 0xFFFFFFFF),
      (w2 & 0xFFFF0FFF) | ((version || 4) << 12), // version (1-5)
      (w3 & 0x3FFFFFFF) | 0x80000000,    // rfc 4122 variant
      (w4 & 0xFFFFFFFF)
    ];
    for (var i = 0, k = 0; i < 4; i++){
      var rnd = data[i];
      for (var j = 0; j < 8; j++){
        var r = (rnd >>> 28) & 0xf; // Take the high-order nybble
        rnd = (rnd & 0x0FFFFFFF) << 4;
        uuid[k++] = this.hex.charAt(r);
      }
    }
    return uuid.join('');
  },
  hex: '0123456789abcdef',
  randomInt: function(){
    return Math.floor(0x100000000 * Math.random());
  },
  uuidSelf(len, radix) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [], i;
    radix = radix || chars.length;
    if (len) {
      for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
    } else {
      var r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
      uuid[14] = '4';
      for (i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random()*16;
          uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
        }
      }
    }
    return uuid.join('');
  }
};
module.exports = UUID;