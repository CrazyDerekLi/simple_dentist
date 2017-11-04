// pages/message/doctor_message.js
var util = require('../../utils/util.js');
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    basePath:'',
    phoneNumber:'15863149556',
    msgid:'',
    msdData:{},
    doctorid:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      basePath: util.getPath()
    });
    var msgid = options.msgid||'';
    this.setData({
      msgid : msgid
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },
  go2phone:function(){
    wx.makePhoneCall({
      phoneNumber:this.data.phoneNumber,
      success:function(){
        
      }
    });
  },
  go2wenzhen:function(){
    var url = "/pages/question/ask_question_doctor";
    url += "?doctorid="+this.data.doctorid;
    wx.navigateTo({
      url: url,
      success: function () { }
    });
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
    wx.setNavigationBarTitle({
      title: '医嘱消息',
    });
    this.getMessageInfo();
  },
  getMessageInfo:function(){
    var _this = this;
    util.getUserInfo(function (info) {
      var url = util.getPath() + 'user/updateMesageStatus';
      var url1 = util.getPath() + 'user/getUserMessage';
      var params = {
        msgid:_this.data.msgid,
        userid:info.CUS_ID
      }

      app.ajax({ url: url, data: params}, function (res) {
      });
      app.ajax({ url: url1,data:params }, function (res) {
        var data = res.data.data[0]||{};
        //console.log(data);
        _this.setData({
          msgData:data,
          doctorid:data.duser_id
        });
      });
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
  
  }
})