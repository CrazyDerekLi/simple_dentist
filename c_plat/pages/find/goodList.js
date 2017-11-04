// pages/faxian/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://dingdongyy.net/hospital-webapp/xcx/index_ad_1.png',
      'https://dingdongyy.net/hospital-webapp/xcx/index_ad_2.png',
      'https://dingdongyy.net/hospital-webapp/xcx/index_ad_3.png',
      'https://dingdongyy.net/hospital-webapp/xcx/index_ad_4.png'
    ],
    userInfo: {},
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 500
  },
  go2detail: function () {
    var url = "/pages/find/gooddetail";
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