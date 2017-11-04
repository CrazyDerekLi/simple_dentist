var util = require('utils/util.js');
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    util.getDoctorID(function (info) {
      console.log(info);
    });

  },
  getLocation: function () {
    var result = undefined;
    wx.getLocation({
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        result = { latitude: latitude, longitude: longitude };
        wx.setStorageSync('location', JSON.stringify(location));
      }
    });
    return result;
  },
  ajax: function (ajaxObj, cbTrue, cbFalse) {
    ajaxObj.success = function (data, statusCode, header) {
      wx.hideLoading();
      if (cbTrue) {
        cbTrue(data, statusCode, header);
      }
    };
    ajaxObj.fail = function (data, statusCode, header) {
      wx.hideLoading();
      if (cbFalse) {
        cbFalse(data, statusCode, header);
      }
    };
    wx.showLoading({
      title: '数据加载中...',
      mask: true
    });
    wx.request(ajaxObj);
  }
})