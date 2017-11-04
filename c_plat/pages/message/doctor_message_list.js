// pages/message/doctor_message_list.js
var util = require('../../utils/util.js');
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    readMessageList:[],
    unReadMessageList:[]
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
    this.getMessageList();
  },
  go2Readmessage:function(e){
    var index = e.currentTarget.dataset.index;
    var messageId = this.data.readMessageList[index].msg_id;
    var url = "/pages/message/doctor_message?msgid=" + messageId;
    wx.navigateTo({
      url: url,
      success: function () { }
    });
  },
  go2UnReadmessage: function (e) {
    var index = e.currentTarget.dataset.index;
    var messageId = this.data.unReadMessageList[index].msg_id;
    var url = "/pages/message/doctor_message?msgid=" + messageId
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
  getMessageList: function () {
    var _this = this;
    util.getUserInfo(function (info) {
      var url = util.getPath() + 'user/getUserMessage';
      var params = {
        userid: info.CUS_ID
      };
      app.ajax({ url: url ,data:params}, function (res) {
        var _data = res.data.data||[];
        console.log(_data);
        var readList = [];
        var unreadList = [];
        for(var i=0;i<_data.length;i++){
          if(_data[i].available === "0"){
            readList.push(_data[i]);
          }else{
            unreadList.push(_data[i]);
          }
        }
        _this.setData({
          readMessageList: readList,
          unReadMessageList:unreadList
        });
      });
    });
    var url = util.getPath() +'';
  }
})