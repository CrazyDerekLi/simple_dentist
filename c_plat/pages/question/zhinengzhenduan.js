// pages/question/zhinengzhenduan.js
var util = require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    progress1:[],
    progress2:[],
    progressList:[],
    progress:1,
    selectProgress1:'',
    selectProgress2:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getType1();
  },
  addProgress:function(event){
    var index = event.currentTarget.dataset.index;
    var key = "selectProgress" + this.data.progress;
    var data = {};
    data["selectProgress" + this.data.progress] = index;
    this.setData(data);
    if(this.data.progress == 1){
      this.getType2(this.data["progress" + this.data.progress][index]);
    }
    if (this.data.progress >= 2) {
      var type1 = this.data.progress1[this.data.selectProgress1].dic_code;
      var type2 = this.data.progress2[this.data.selectProgress2].dic_code;
      var url = "/pages/question/zhenduanbaogao?type1="+type1+"&type2="+type2;
      wx.navigateTo({
        url: url,
        success: function () { }
      });
      return;
    }

    this.setData({
      progress: this.data.progress + 1
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
  getType1:function(){
    var _this = this;
    var url = util.getPath() + 'disgnosis/getDicInfoByType1' ;
    wx.request({
      url: url,
      success: function (res) {
        var _data = res.data.data;
        _this.setData({
          progress1:_data,
          progressList: _data
        });
      }
    });
  },
  getType2:function(selectType1){
    var _this = this;
    var url = util.getPath() + 'disgnosis/getDicInfoByType2';
    url += "?code1=" + selectType1.dic_code;
    wx.request({
      url: url,
      success: function (res) {
        var _data = res.data.data;
        _this.setData({
          progress2: _data,
          progressList: _data
        });
      }
    });
  }
})