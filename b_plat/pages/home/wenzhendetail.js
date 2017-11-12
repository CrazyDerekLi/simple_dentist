var util = require('../../utils/util.js');

// pages/my/doctor/wenzhendetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    questionid:'',
    content:'',
    msgData:{}
  },
  changeMsg:function(e){
    var value = e.detail.value;
    this.setData({
      content:value
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      questionid: options.questionid || '',
      wzr: options.wzr || '',
      wzxm: options.wzxm || '',
      wznr: options.wznr || '',
      wzlxfs: options.wzlxfs || '',
      wzrcode: options.wzrcode||''
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
  
  },

  go2adduser: function (event) {
    var url = "/pages/my/doctor/addUser";
    wx.navigateTo({
      url: url,
      success: function () { }
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
  go2caseList:function(){
    var url = "/pages/healthy/caselist";
    wx.navigateTo({
      url: url,
      success: function () { }
    });
  },
  setMessage:function(){
    var _this = this;
    util.getDoctorID(function (doctorid) {
      var url = util.getPath() + 'doctor/replyQuesInfo';
      var params = {
        docid: doctorid,
        qusid: _this.data.questionid,
        content: _this.data.content,
        type: 0
      };
      util.ajax({ url: url, data: params }, function (res) {
        var _data = res.data.data;
        wx.navigateBack({
          delta:1
        });

      });
    });
  },
  setYXKH:function(){
    
  }
})