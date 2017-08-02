// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    healthy:100,
    userList: [
      { userid: 1, username: "章三", healthy: 0 },
      { userid: 2, username: "李四", healthy: 10 },
      {userid: 3, username: "王五", healthy: 100 }  
    ],
    userInfo: {},
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 500
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setTopColor(this.data.userList[0].healthy);
  },
  go2HealthyDesc:function(event){
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
  go2Search:function(event){
    var url = "/pages/question/ziwozhenduan";
    wx.navigateTo({
      url: url,
      success: function () { }
    });
  },
  go2Add:function(event){
    var url = "/pages/question/ask_question";
    wx.navigateTo({
      url: url,
      success: function () { }
    });
    /*
    var index = event.currentTarget.dataset.index;
    console.log(index);
    var data = this.data.userList;
    data[index].healthy += 10;
    if(data[index].healthy > 100) 
      data[index].healthy = 100;
    this.setTopColor(data[index].healthy);
    this.setData({
      userList:data
    });*/
  },
  changeUser:function(event){
    var index = event.detail.current;
    this.setTopColor(this.data.userList[index].healthy);
  },
  setTopColor:function(healthy){
    if (healthy < 1) {
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#f28a94',
      })
    } else {
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#74bee3',
      })
    }
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