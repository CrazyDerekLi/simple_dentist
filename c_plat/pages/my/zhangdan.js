var util = require('../../utils/util.js');
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab:"1",
    showList:[],
    zdList:{}
  },
  clickTab:function(event){
    console.log(event);
    var tab = event.currentTarget.dataset.tab;
    this.setData({
      tab:tab,
      showList:this.data.zdList[tab]||[]
    });
  },
  getZD: function () {
    var _this = this;
    util.getUserInfo(function (info) {
      var url = util.getPath() + 'user/getmyorders?userid=' + info.CUS_ID;
      app.ajax({ url: url }, function (res) {
        var _data = res.data.data;
        console.log(_data);
        _this.setData({
          zdList: _data,
          showList:_data[_this.data.tab]||[]
        });
      });
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getZD();
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
    this.getZD();
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