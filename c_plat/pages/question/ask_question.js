// pages/question/ask_question.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yyr:"1",
    yyxm:"2"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },
  selectYYR:function(event){
    var typeStr = event.currentTarget.dataset.type;
    this.setData({
      yyr:typeStr
    });
  },
  selectYYXM:function(event){
    var typeStr = event.currentTarget.dataset.type;
    this.setData({
      yyxm: typeStr
    });  
  },
  go2Success:function(){
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