var util = require('../../utils/util.js');
// pages/my/doctor/questionmanager.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jswz: [],
    jswzCount: 0,
    khwz: [],
    khwzCount: 0,
    showList: [],
    tab: "0"
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
    this.getJSWZ();
    this.getKHWZ();
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
  go2detail: function (event) {
    var index = event.currentTarget.dataset.index;
    var id = this.data.showList[index].qus_id;
    var wzr = this.data.showList[index].dic_name;
    var wzxm = this.data.showList[index].dic_name;
    var wznr = this.data.showList[index].qus_context;
    var wzlxfs = this.data.showList[index].dic_name;
    var wzrcode = this.data.showList[index].qus_fuserId;
    var url = "/pages/home/wenzhendetail?questionid=" + id + "&wzr=" + wzr + "&wzxm=" + wzxm + "&wznr=" + wznr + "&wzlxfs=" + wzlxfs + "&wzrcode=" + wzrcode;
    wx.navigateTo({
      url: url,
      success: function () { }
    });
  },
  go2back: function () {
    wx.navigateBack({
      delta:1
    });
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
  getJSWZ: function () {
    var _this = this;
    util.getDoctorID(function (doctorid) {
      var url = util.getPath() + 'doctor/getDocQuesInfo';
      var params = {
        docid: doctorid,
        vailtype: 0,
        raidus: 10000
      };
      util.ajax({ url: url, data: params }, function (res) {
        var _data = res.data.data;
        console.log(_data);
        _this.setData({
          jswz: _data,
          jswzCount: _data.length
        });
        if (_this.data.tab == "0") {
          _this.setData({
            showList: _data
          });
        }
      });
    });

  },
  getKHWZ: function () {
    var _this = this;
    util.getDoctorID(function (doctorid) {
      var url = util.getPath() + 'doctor/getDocQuesInfoByDocId';
      var params = {
        docid: doctorid,
        vailtype: 0
      };
      util.ajax({ url: url, data: params }, function (res) {
        var _data = res.data.data;
        console.log(_data);
        _this.setData({
          khwz: _data,
          khwzCount: _data.length
        });
        if (_this.data.tab == "1") {
          _this.setData({
            showList: _data
          });
        }
      });
    });
  },
  showJSWZ: function () {
    this.setData({
      tab: "0",
      showList: this.data.jswz
    });
  },
  showKHWZ: function () {
    this.setData({
      tab: "1",
      showList: this.data.khwz
    });
  }
})