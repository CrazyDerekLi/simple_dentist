var util = require('utils/util.js');
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    util.getUserInfo(function (info) {
      console.log(info);
    });
  }
})