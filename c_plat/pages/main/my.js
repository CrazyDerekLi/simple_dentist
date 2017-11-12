var util = require('../../utils/util.js');
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    money:"0.00"
  },
  getUserMoney:function(){
    var _this = this;
    util.getUserInfo(function (info) {
      var url = util.getPath() + 'user/getmoney?userid=' + info.CUS_ID;
      app.ajax({ url: url }, function (res) {
        var _data = res.data.data;
        console.log(_data);
        _this.setData({
          money: _data
        });
      });
    });
  },
  go2mymain:function(){
    var url = "/pages/my/doctor/main";
    wx.navigateTo({
      url: url,
      success: function () { }
    });
  },
  go2zhangdan:function(){
    var url = "/pages/my/zhangdan";
    wx.navigateTo({
      url: url,
      success: function () { }
    });
  },
  go2familydoctor:function(){
    var url = "/pages/my/familydoctor";
    wx.navigateTo({
      url: url,
      success: function () { }
    });
  },
  go2cart:function(){
    var url = "/pages/find/cart";
    wx.navigateTo({
      url: url,
      success: function () { }
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
    this.getUserMoney();
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
  
  }
})