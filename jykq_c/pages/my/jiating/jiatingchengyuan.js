// pages/my/jiating/jiatingchengyuan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    doctor:"1",
    family:"2"
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
  go2Doctor:function(){
    var url = "/pages/my/jiating/doctor_detail";
    wx.navigateTo({
      url: url,
      success: function () { }
    });
  },
  go2Fujin:function(){
    wx.navigateBack({
      delta:1
    });
    wx.switchTab({
      url:"/pages/nearby/index"
    });
  },
  go2add:function(){
    var url = "/pages/my/jiating/addfamily";
    wx.navigateTo({
      url: url,
      success: function () { }
    });var url = "/pages/my/jiating/addfamily";
    wx.navigateTo({
      url: url,
      success: function () { }
    });
  },
  go2familydetail:function(){
    var url = "/pages/my/jiating/familydetail";
    wx.navigateTo({
      url: url,
      success: function () { }
    });
  }
})