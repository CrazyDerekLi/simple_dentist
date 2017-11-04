// pages/my/familydetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  go2yuyue: function () {
    // var url = "/pages/question/ask_question_family_doctor";
    // wx.navigateTo({
    //   url: url,
    //   success: function () { }
    // });
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
  go2caseHistory: function () {
    var url = "/pages/healthy/caselist";
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

  }
})