var util = require('../../utils/util.js');
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    doctorInfo: {},
    doctorid:'',
    ysjj:[],
    jybj:[],
    yjcg:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
  setFamilyDoctor:function(){

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