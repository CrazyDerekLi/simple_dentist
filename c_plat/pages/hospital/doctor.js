var util = require('../../utils/util.js');
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    doctorInfo: {},
    doctorid:'',
    userid:'',
    ysjj:[],
    jybj:[],
    yjcg:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    util.getUserInfo(function(res){
      _this.setData({
        userid:res.CUS_ID
      });
    });
    this.setData({
      basePath: util.getPath()
    });
    this.loadDoctorInfo(options.doctorid||"");
  },
  loadDoctorInfo:function(id){
    var _id = this.data.doctorid;
    if(id){
      this.setData({
        doctorid:id
      });
      _id = id;
    }
    this.getDoctorInfo(_id);
  },
  go2Question:function(){
    var url = "/pages/question/ask_question_doctor";
    url += "?doctorid="+this.data.doctorid;
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
    this.loadDoctorInfo();
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
  go2SetFamilyDoctor:function(){
    var _this = this;
    if (!this.data.doctorid || !this.data.userid) return;
    var params = {
      docid: this.data.doctorid,
      userid: this.data.userid
    };
    var url = util.getPath() + 'doctor/setfamilydoc';
    app.ajax({ url: url, data: params }, function (res) {
      var _data = res.data.data;
      //console.log(_data);
    });
  },
  setFamilyDoctor:function(){
    var _this = this;
    util.getUserInfo(function (info) {
      var url = util.getPath() + 'user/getfamilydocinfo?userid=' + info.CUS_ID;
      app.ajax({ url: url }, function (res) {
        var _data = res.data.data;
        //console.log(_data);
        if (_data.duser_name==undefined){
          _this.go2SetFamilyDoctor();
        }else{
          wx.showToast({
            mask:true,
            image:"/img/btn_close_gray.png",
            title: "已经设置过家庭医生，请先解雇家庭医生"+_data.duser_name
          });
          setTimeout(function(){
            wx.hideToast();
          },2000);
        }
      });
    });
  },
  getDoctorInfo:function(doctorid){
    var _this = this;
    if(!doctorid)return;
    var params = {
      docid:doctorid
    };
    var url = util.getPath() + 'doctor/getdoctorInfoById';
    app.ajax({ url: url ,data:params}, function (res) {
      var _data = res.data.data;
      console.log(_data);
      var ysjj = _data.duser_remake || '';
      var jybj = _data.duser_context || '';
      var yjcg = _data.duser_fruit || '';
      _this.setData({
        doctorInfo: _data,
        ysjj: ysjj.split("\\n"),
        jybj: jybj.split("\\n"),
        yjcg: yjcg.split("\\n")
      });
    });
  }
})