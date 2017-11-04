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
  var userInfo = undefined;
  try {
    var storageUserInfo = wx.getStorageSync("userInfo");
    userInfo = JSON.parse(storageUserInfo);
  } catch (e) {

  }
  var that = this;
  if (userInfo) {
    typeof cb == "function" && cb(userInfo)
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
                    searchPlatUserUrl += '?wxid=' + openid + "&username=" + userInfo.nickName;
                    searchPlatUserUrl = encodeURI(searchPlatUserUrl);
                    console.log(searchPlatUserUrl);
                    wx.request({
                      url: searchPlatUserUrl,
                      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
                      header: {
                        'content-type': 'application/json'
                      },
                      fail: function (e) {
                        //将来考虑失败的实现
                      },
                      success: function (res) {
                        var data = JSON.parse(res.data.data);
                        if (data) {
                          for (var key in data) {
                            userInfo[key] = data[key];
                          }
                        }
                        var res = wx.setStorageSync("userInfo", JSON.stringify(userInfo));
                        typeof cb == "function" && cb(userInfo)
                      }
                    })
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
  var doctorid = '';
  var doctorwxid = '';
  try {
    doctorid = wx.getStorageSync("doctorid");
    doctorwxid = wx.getStorageSync("doctorwxid");
  } catch (e) {

  }
  var that = this;
  if (doctorid) {
    typeof cb == "function" && cb(doctorid);
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
                    searchPlatUserUrl += '?wxid=' + openid + "&username=" + userInfo.nickName;
                    searchPlatUserUrl = encodeURI(searchPlatUserUrl);
                    console.log(searchPlatUserUrl);
                    wx.request({
                      url: searchPlatUserUrl,
                      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
                      header: {
                        'content-type': 'application/json'
                      },
                      fail: function (e) {
                        //将来考虑失败的实现
                      },
                      success: function (res) {
                        var data = JSON.parse(res.data.data);
                        if (data) {
                          for (var key in data) {
                            userInfo[key] = data[key];
                          }
                        }
                        var res = wx.setStorageSync("userInfo", JSON.stringify(userInfo));
                        typeof cb == "function" && cb(userInfo)
                      }
                    })
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
module.exports.formatTime = formatTime;
module.exports.getUserInfo = getUserInfo;
module.exports.getDoctorID = getDoctorID;
module.exports.getPath = getPath;
module.exports.getCity = getCity;

