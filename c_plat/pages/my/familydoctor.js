// pages/my/familydoctor.js
var util = require('../../utils/util.js');
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    basePath:'',
    doctorName:'',
    doctorHospital:'',
    doctorStatus:'',
    doctorPhoto:'',
    userList:[]
  },
  go2detail:function(e){
    var index = e.currentTarget.dataset.index;
    var o = this.data.userList[index];
    var url = "/pages/my/familydetail?familyid=" + o.FUSER_ID;
    wx.navigateTo({
      url: url,
      success: function () { }
    });
  },
  go2edit:function(){
    var url = "/pages/main/nearby";
    wx.navigateTo({
      url: url,
      success: function () { }
    });
  },
  go2add:function(){
    var url = "/pages/my/addfamily";
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
    this.setData({
      basePath: util.getPath()
    });
    this.getFamilyData();
    this.getDoctorData();
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
  getDoctorData:function(){
    var _this = this;
    util.getUserInfo(function (info) {
      var url = util.getPath() + 'user/getfamilydocinfo?userid=' + info.CUS_ID;
      app.ajax({ url: url }, function (res) {
        var _data = res.data.data;
        console.log(_data);
        _this.setData({
          doctorName:_data.duser_name||'',
          doctorHospital:_data.hos_name||'',
          doctorStatus:_data.duser_statusvarchar,
          doctorPhoto: _data.pic_path||''
        });
      });
    });
  },
  getFamilyData: function () {
    var _this = this;
    util.getUserInfo(function (info) {
      var url = util.getPath() + 'user/getuserfamily?userid=' + info.CUS_ID;
      app.ajax({ url: url }, function (res) {
        var _data = res.data.data;
        _this.setData({
          userList: _data
        });
      });
    });


  }
})