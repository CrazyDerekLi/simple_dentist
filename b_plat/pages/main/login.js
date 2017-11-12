var util = require('../../utils/util.js');
// pages/main/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    code:''
  },
  bindChangeCode:function(e){
    this.setData({
      code:e.detail.value
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  go2login:function(){
    var _this = this;
    util.getUserInfo(function (openid) {
      var url = util.getPath() + 'login/vailuser?code=' + _this.data.code +"&wxid="+openid;
      util.ajax({ url: url }, function (res) {
        var _data = res.data.data;
        if(_data!==""){
          wx.setStorageSync("doctorid", _data);
          wx.navigateBack({
            delta:1
          })
        }else{
          wx.showToast({
            title:"验证码无效",
            image:"/img/btn_close_gray.png"
          });
          setTimeout(function(){
            wx.hideToast();
          },3000);
        }
        
      });
    });
  }
})