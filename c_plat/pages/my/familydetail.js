// pages/my/familydetail.js
var util = require('../../utils/util.js');
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    basePath:'',
    familyPhoto: '',
    familyStatus:'0',
    familyName: '',
    familyAge:'',
    familySex:'1',
    familyCity:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.familyid || '',
      basePath: util.getPath()
    });
    this.getFamilyDetailData(options.familyid || '');
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
    this.getFamilyDetailData(this.data.id || '');
  },
  go2edit:function(){
    var url = "/pages/my/addfamily?familyid="+this.data.id;
    wx.navigateTo({
      url: url,
      success: function () { }
    });
  },
  go2question:function(){
    var url = "/pages/question/ask_question_family_doctor";
    wx.navigateTo({
      url: url,
      success: function () { }
    });
  },
  go2HealthyDesc: function (event) {
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
  go2caseHistory:function(){
    var url = "/pages/my/caselist";
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
  getFamilyDetailData:function(id){
    if(id){
      var _this = this;
        var url = util.getPath() + 'user/getfamilyuserinfo?fuserid=' + id;
        app.ajax({ url: url }, function (res) {
          var _data = res.data.data;
          console.log(_data);
          var _fuserInfo = _data.fuserInfo[0]||{};
          _this.setData({
            familyPhoto:_fuserInfo.pic_path||'',
            familyStatus:_fuserInfo.fuser_status||'0',
            familyName:_fuserInfo.fuser_name||'',
            familyAge:_fuserInfo.fuser_age||'',
            familySex:_fuserInfo.fuser_sex||'1',
            familyCity:util.getCity(_fuserInfo.fuser_city)
          });
      });
    }
  }

})