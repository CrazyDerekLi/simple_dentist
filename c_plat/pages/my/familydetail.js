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
    familyCity:"",
    caseList:[]
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
    this.getCaseInfo(options.familyid || '');
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
    this.getCaseInfo(this.data.id || '');
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
  getCaseInfo: function (id) {
    var _this = this;
      var url = util.getPath() + 'doctor/getcasesinfo';
      var params = {
        userid: id,
        isavailable: 1
      };
      app.ajax({ url: url, data: params }, function (res) {
        var _data = res.data.data;
        _data = [{ "cases_noon": "1", "cases_cost": "1", "ispay": "1", "cases_id": "1", "cases_result": "1", "cases_time": 1509978968000, "cases_resid": "1", "cases_userid": "1", "cases_plan": "1", "available": "1" }, { "cases_noon": "1", "cases_cost": "100", "ispay": "2", "cases_id": "2", "cases_result": "123", "cases_time": 1509979021000, "cases_resid": "2", "cases_userid": "1", "cases_plan": "123", "available": "2" }];
        console.log(_data);
        _this.setData({
          caseList:_data
        });
      });
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