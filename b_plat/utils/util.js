var appId = 'wx9109650099c79e5b'; //填写微信小程序appid  
var secret = '7825f56d78fa1706f1943c6a03054cc8';
var path = 'https://dingdongyy.net/dentist-web/';
//var searchWXIDUrl = "https://api.weixin.qq.com/sns/oauth2/access_token?appid="+appId+"&secret="+secret+"&grant_type=authorization_code";
var searchWXIDUrl = path + "user/getUsertoken1?appid=" + appId + "&secret=" + secret;
var searchPlatUserUrl = path + "user/updateUserInfo";

function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function getUserInfo(cb) {
  var openid = wx.getStorageSync("openid");
  var that = this;
  if (openid) {
    typeof cb == "function" && cb(openid)
  } else {
    wx.login({
      success: function (loginCode) {
        wx.getUserInfo({
          success: function (res) {
            var code = loginCode.code;
            searchWXIDUrl += "&code=" + code;
            var userInfo = res.userInfo || {};
            wx.request({
              url: searchWXIDUrl,
              header: {
                'content-type': 'application/json'
              },
              fail: function (e) {
                //将来考虑失败的实现
              },
              success: function (res) {
                var data = res.data.data;
                if (data) {
                  data = JSON.parse(data);
                  var openid = data.openid;
                  if (openid) {
                    wx.setStorageSync("openid",openid);
                    typeof cb == "function" && cb(openid)
                  }
                }
              }
            })
          }
        })
      }
    })
  }
}
function getDoctorID(cb) {
  var doctorid = wx.getStorageSync("doctorid");
  var doctorwxid = wx.getStorageSync("doctorwxid");
  if(!doctorid){
    var url = "/pages/main/login";
    wx.navigateTo({
      url: url,
      success: function () { }
    });
  }else{
    typeof cb == "function" && cb(doctorid)
  }

}
function getPath() {
  return path;
}
function getCity(city) {
  console.log(city);
  var _cityArr = JSON.parse(city || "[]");
  var result = '';
  if (_cityArr.length == 3) {
    if (_cityArr[1] == "北京市" || _cityArr[1] == "天津市" || _cityArr[1] == "上海市" || _cityArr[1] == "重庆市" || _cityArr[1] == "县") {
      _cityArr.splice(0, 1);
      result = _cityArr.join("");
    }
    result = _cityArr.join("");
  }
  return result;
}
function goAjax(ajaxObj, cbTrue, cbFalse){
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
module.exports.formatTime = formatTime;
module.exports.getUserInfo = getUserInfo;
module.exports.getDoctorID = getDoctorID;
module.exports.getPath = getPath;
module.exports.getCity = getCity;
module.exports.ajax = goAjax
