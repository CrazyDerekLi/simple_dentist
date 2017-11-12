var util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    doctorInfo: {},
    basePath:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      basePath: util.getPath()
    });
  },
  go2wenzhen: function (event) {
    var url = "/pages/home/wenzhen";
    wx.navigateTo({
      url: url,
      success: function () { }
    });
  },
  go2yuyue: function (event) {
    var url = "/pages/home/yuyue";
    wx.navigateTo({
      url: url,
      success: function () { }
    });
  },
  go2jieda: function (event) {
    var url = "/pages/home/jieda";
    wx.navigateTo({
      url: url,
      success: function () { }
    });
  },
  go2kehu: function (event) {
    var url = "/pages/home/kehu";
    wx.navigateTo({
      url: url,
      success: function () { }
    });
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
    this.setData({
      basePath: util.getPath()
    });
    var _this = this;
    util.getDoctorID(function (info) {
      if(info){
        _this.getDoctorInfo(info);
      }
    });
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
  getDoctorInfo:function(doctorid){
    var _this = this;
    var params = {
      docid: doctorid
    };
    var url = util.getPath() + 'doctor/getdoctorInfoById';
    util.ajax({ url: url, data: params }, function (res) {
      var _data = res.data.data;
      console.log(_data);
      _this.setData({
        doctorInfo: _data
      });
    });
  }
})