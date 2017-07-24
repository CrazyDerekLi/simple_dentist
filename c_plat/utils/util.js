var appId = 'wxb36394319df47dbe'; //填写微信小程序appid  
var secret = 'c7b62e5a7eecd261b75d88f75064294d';
var searchWXIDUrl = "https://api.weixin.qq.com/sns/oauth2/access_token?appid="+appId+"&secret="+secret+"&grant_type=authorization_code";
var searchPlatUserUrl = "https://dingdongyy.net/hospital-webapp/core/user/updateUserInfo";

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

function getUserInfo(cb){
  var userInfo = undefined;
  try {
    var storageUserInfo = wx.getStorageSync("userInfo");
    userInfo = JSON.parse(storageUserInfo);
  } catch (e) {

  }
  var that = this;
  if(userInfo){
    typeof cb == "function" && cb(userInfo)
  }else{
    wx.login({  
      success: function (loginCode) {  
        wx.getUserInfo({
          success: function (res) {
            var code = loginCode.code;
            searchWXIDUrl += "&code="+code;
            var userInfo = res.userInfo||{};
            wx.request({  
              url: searchWXIDUrl,  
              header: {  
                  'content-type': 'application/json'  
              },  
              fail: function(e) {
                //将来考虑失败的实现
              },
              success: function(res) { 
                var data = res.data;
                if(data){
                  var openid = data.openid;
                  if(openid){
                    searchPlatUserUrl += '?wxid='+openid+"&username="+userInfo.nickName;
                    searchPlatUserUrl = encodeURI(searchPlatUserUrl);
                    console.log(searchPlatUserUrl);
                    wx.request({
                      url: searchPlatUserUrl,
                      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
                      header: {
                          'content-type': 'application/json'
                      },
                      fail: function(e) {
                        //将来考虑失败的实现
                      },
                      success: function(res){
                        var data = JSON.parse(res.data.data);
                        if(data){
                          for(var key in data){
                            userInfo[key] = data[key];
                          }
                        }
                        var res = wx.setStorageSync("userInfo",JSON.stringify(userInfo));
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

module.exports.formatTime = formatTime;
module.exports.getUserInfo = getUserInfo;
