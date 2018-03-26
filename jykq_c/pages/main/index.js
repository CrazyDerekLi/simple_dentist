// pages/main/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userList:[{
     username:"李晓明1",
     status:"1" 
    }, {
      username: "李晓明2",
      status: "2"
    }],
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
  changeUser:function(){

  },
  go2JJWZ:function(){
    var url = "/pages/main/jjwz/jjwzgdy";
    wx.navigateTo({
      url: url,
      success: function () { }
    });
  },
  go2ZWZD:function(){
    var url = "/pages/main/zwzd/zwzdgdy";
    wx.navigateTo({
      url: url,
      success: function () { }
    });
  },
  go2KP: function () {
    var url = "/pages/main/kepu/kepu";
    wx.navigateTo({
      url: url,
      success: function () { }
    });
  },
  go2FZXQ:function(){
    var url = "/pages/main/fzxq/fzxq";
    wx.navigateTo({
      url: url,
      success: function () { }
    });
  },
  go2familydetail: function () {
    var url = "/pages/my/jiating/familydetail";
    wx.navigateTo({
      url: url,
      success: function () { }
    });
  }
})