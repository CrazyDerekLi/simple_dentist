// pages/message/doctor_message.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phoneNumber:'15863149556'
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
  go2addUser:function(){
    wx.showToast({
      title: '客户已被添加',
    })
  },
  go2phone:function(){
    wx.makePhoneCall({
      phoneNumber:this.data.phoneNumber,
      success:function(){
        
      }
    });
  },
  go2wenzhen:function(){
    var url = "/pages/question/ask_question_family_doctor";
    wx.navigateTo({
      url: url,
      success: function () { }
    });
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.setNavigationBarTitle({
      title: '问诊详情',
    })
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