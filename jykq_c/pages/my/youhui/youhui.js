// pages/my/youhui/youhui.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab: "1",
    ts:"1"
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
  go2Tab1: function () {
    this.setData({
      tab: "1"
    });
  },
  go2Tab2: function () {
    this.setData({
      tab: "2"
    });
  },
  go2Tab3: function () {
    this.setData({
      tab: "3"
    });
  },
  closeTS:function(){
    this.setData({
      ts:"2"
    });
  },
  go2YY:function(){
    var url = "/pages/my/yuyue/fbyy";
    wx.navigateTo({
      url: url,
      success: function () { }
    });
  },
  go2mianfeiqiang:function(){
    this.go2YY();
  },
  go2taocan: function () {
    this.go2YY();
  },
  go2cantuan: function () {
    this.go2YY();
  }
})