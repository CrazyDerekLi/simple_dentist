// pages/main/main.js
var util = require('../../utils/util.js');
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    basePath:'',
    FUSER_STATUS:1,
    userList: [],
    userCountList:[],
    userCounts:[
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0], 
      [0, 0, 0, 0, 0]
    ],
    userMessage:false,
    userInfo: {},
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 500
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },
  getUserNewMessage:function(){
    var _this = this;
    util.getUserInfo(function (info) {
      var url = util.getPath() + 'user/getUserMessage?userid=' + info.CUS_ID+'&type=1';
      app.ajax({ url: url }, function (res) {
        var _data = res.data.data;
        var flag = false;
        if(_data.length>0){
          flag = true;
        }
        _this.setData({
          userMessage:flag
        });
        
      });
    });
  },
  go2HealthyDesc:function(event){
    var url = "/pages/healthy/healthy_desc";
    //var url = "/pages/question/zhinengzhenduan";
    wx.navigateTo({
      url: url,
      success: function () { }
    });
  },
  go2DoctorMessage: function (event) {
    var url = "/pages/message/doctor_message";
    wx.navigateTo({
      url: url,
      success: function () { }
    });
  },
  go2xiaoxi: function () {
    var url = "/pages/message/doctor_message_list";
    wx.navigateTo({
      url: url,
      success: function () { }
    });
  },
  go2wenzhen: function () {
    var url = "/pages/question/ask_question";
    wx.navigateTo({
      url: url,
      success: function () { }
    });
  },
  go2zhenduan: function (event) {
    //var url = "/pages/question/ziwozhenduan";
    var url = "/pages/question/zhinengzhenduan";
    wx.navigateTo({
      url: url,
      success: function () { }
    });
  },
  go2Add:function(event){
    var url = "/pages/question/ask_question";
    wx.navigateTo({
      url: url,
      success: function () { }
    });
    /*
    var index = event.currentTarget.dataset.index;
    console.log(index);
    var data = this.data.userList;
    data[index].healthy += 10;
    if(data[index].healthy > 100) 
      data[index].healthy = 100;
    this.setTopColor(data[index].healthy);
    this.setData({
      userList:data
    });*/
  },
  changeUser:function(event){
    var index = event.detail.current;
    //this.setTopColor(this.data.userList[index].FUSER_STATUS);
  },
  setTopColor: function (FUSER_STATUS){
    if (FUSER_STATUS < 1) {
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#f28a94',
      })
    } else {
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#74bee3',
      })
    }
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
    this.getUserCount();
    this.getUserNewMessage();
    
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
  go2UserDetail:function(event){
    var ind = event.currentTarget.dataset.index;
    var id = this.data.userList[ind].FUSER_ID;
    //console.log(id);
    var url = "/pages/my/familydetail?familyid="+id;
    wx.navigateTo({
      url: url,
      success: function () { }
    });
  },
  getUserCount:function(){
    var _this = this;
    util.getUserInfo(function (info) {
      var url = util.getPath() + 'user/getuserhealth?userid=' + info.CUS_ID;
      app.ajax({ url: url },function(res){
        var _data = res.data.data;
        var list = [];
        for(var i=0;i<_this.data.userCounts.length;i++){
          var o = [];
          for(var j=0;j<_this.data.userCounts[i].length;j++){
            var _o = _this.data.userCounts[i][j];
            if(_data.length>j){
              var _u = parseInt(_data[i].hea_use||0);
              var _a = parseInt(_data[i].hea_count||1);
              _o = _u * 100 - _a * 100 * (j + 1) / 5 > 0 ? 100 : (_u * 100 - _a * 100 * j / 5 > 0) ? (_u * 100 - _a * 100 * j / 5) * 100 /(_a * 20):0;
            }
            o.push(_o);
          }
          list.push(o);
        }

        //console.log(_data);
        _this.setData({
          userCountList: _data,
          userCounts: list
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