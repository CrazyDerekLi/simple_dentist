var util = require('../../utils/util.js');
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    basePath:'',
    hospitalInfo:{},
    jgjj:[],
    hospitalid:'',
    imgUrls: [],
    userInfo: {},
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 500
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      basePath: util.getPath()
    });
    this.getHospitalInfo(options.hospitalid||'');
  },
  getHospitalInfo:function(id){
    var _id = this.data.hospitalid;
    if(id){
      this.setData({
        hospitalid: id || ''
      });
      _id = id;
    }
    var _this  = this;
    var url = util.getPath() + 'hospital/gethospitalInfoById';
    var params = {
      hosid:_id
    };
    app.ajax({ url: url ,data:params}, function (res) {
      var _data = res.data.data;
      console.log(_data);
      wx.setNavigationBarTitle({
        title: _data.HOS_NAME
      });
      var jgjj = _data.HOS_REMORK||'';
      _this.setData({
        hospitalInfo: _data,
        jgjj: jgjj.split("\\n")
      });
    });
  },
  go2Doctor:function(){
    var url = "/pages/hospital/doctor";
    wx.navigateTo({
      url: url,
      success: function () { }
    });
  },
  go2wenzhen:function(){
    var url = "/pages/question/ask_question_hospital_doctor";
    url += '?hospitalid='+this.data.hospitalid;
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
    this.getHospitalInfo();
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