// pages/question/ask_question.js
var util = require('../../utils/util.js');
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userId: '',
    userTel: '',
    context: '',
    yyr: "1",
    yyxm: "",
    userName: '李晓明22',
    userIndex: [0],
    typeCode: '',
    typeName: '',
    typeIndex: [1],
    typeList: [],
    users: [],
    longitude: 0,
    latitude: 0,
    hospitalid: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    this.setData({
      hospitalid: options.hospitalid || ''
    });
    this.getUsers();
  },
  getUsers: function () {
    var _this = this;
    util.getUserInfo(function (info) {
      _this.ajaxGetUsers(info.CUS_ID);
      _this.setData({
        userId: info.CUS_ID
      });
    });

  },
  ajaxGetUsers: function (userId) {
    var _this = this;
    var url = util.getPath() + 'doctor/getQuestionInfo?userid=' + userId;
    app.ajax({ url: url }, function (res) {
      var _userList = res.data.data.fuserList || [];
      var _typeList = res.data.data.dicList || [];
      var defaultUser = _userList[0] || {};
      var defaultType = _typeList[0] || {};
      _this.setData({
        users: _userList,
        typeList: _typeList,
        userId: defaultUser.FUSER_ID || "",
        userName: defaultUser.FUSER_NAME || "",
        typeName: defaultType.DIC_NAME || "",
        typeCode: defaultType.DIC_CODE || "",
        userTel: defaultUser.FUSER_TEL || ''
      });
    });
  },

  go2Success: function () {
    var url = "/pages/question/ask_question_success";
    //var url = "/pages/question/zhinengzhenduan";
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
    var _this = this;
    var location = wx.getStorageSync('location') || '{}';
    var position = JSON.parse(location);
    if (location == '{}') {
      position = app.getLocation(function (pos) {
        _this.setData({
          longitude: pos.longitude,
          latitude: pos.latitude
        });
      });
    } else {
      this.setData({
        longitude: position.longitude,
        latitude: position.latitude
      });
    }
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
  bindChangeType: function (e) {
    const val = e.detail.value;
    var type = this.data["typeList"][val[0]];
    if (type) {
      this.setData({
        typeCode: type.DIC_CODE,
        typeName: type.DIC_NAME
      });
    }
  },
  bindChangeUser: function (e) {
    const val = e.detail.value;
    var user = this.data["users"][val[0]];
    if (user) {
      this.setData({
        userId: user.FUSER_ID,
        userName: user.FUSER_NAME,
        userTel: user.FUSER_TEL
      });
    }

  },
  cancelUser: function () {
    this.setData({
      showUserPicker: false,
      showChoose: false
    });
  },
  go2UserPicker: function () {
    if (this.data.users.length > 0) {
      this.setData({
        showUserPicker: true,
        showChoose: true
      });
    }

  },
  sendAsk: function () {
    this.sendWenzhen("hospital");
  },
  sendAskToAll: function () {
    this.sendWenzhen();
  },
  sendWenzhen: function (type) {
    var _this = this;
    util.getUserInfo(function (info) {
      var _params = {};
      _params.type = 0;
      if (type == "family") {
        _params.type = 1;
      } else if (type == "doctor") {
        _params.type = 2;
        _params.docid = _this.data.doctorid;
      } else if (type == "hospital") {
        _params.type = 3;
        _params.hosid = _this.data.hosid;
        _params.longitade = _this.data.longitude;
        _params.latitude = _this.data.latitude;
      } else {
        _params.type = 0;
        _params.longitade = _this.data.longitude;
        _params.latitude = _this.data.latitude;
      }
      _params.qus_pro = _this.data.typeCode;
      _params.userid = info.CUS_ID;
      _params.fuserid = _this.data.yyr;
      _params.photo = _this.data.userTel;
      _params.context = _this.data.context;
      _params.available = 1;

      var url = util.getPath() + 'doctor/pubQuestionInfo';
      app.ajax({
        url: url,
        method: "GET",
        data: _params
      }, function (res) {
        wx.showToast({
          title: '问诊发布成功',
        });
        setTimeout(function () {
          wx.hideToast();
          wx.navigateBack({
            delta: 5
          })
        }, 1000);
      });
    });
  },
  changePhone: function (e) {
    this.setData({
      userTel: e.detail.value
    });
  },
  changeContext: function (e) {
    this.setData({
      context: e.detail.value
    });
  }
})