// pages/my/jiating/addfamily.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"李晓明",
    filePath:'',
    sex:1,
    date:"2016-02-02",
    sexList: ['女', '男'],
    index:0,
    array: ['日照市', '济南市']
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
  go2addphoto:function(){
    var _this = this;
    wx.chooseImage({
      count: 1,
      sizeType: ["compressed"],
      success: function (res) {
        var tempFilePaths = res.tempFilePaths;
        console.log(res);
        if (tempFilePaths[0]) {
          _this.setData({
            filePath: tempFilePaths[0]
          });
          // var fileUploadUrl = util.getPath() + 'upload/uploadImage';
          // wx.uploadFile({
          //   url: fileUploadUrl,
          //   filePath: tempFilePaths[0],
          //   name: 'imgFile',
          //   success: function (res) {
          //     console.log(res);
          //     var fileId = res.data || '';
          //     _this.setData({
          //       fileId: fileId
          //     });
          //   }
          // });
        }
      }
    })
  },
  changeName: function (e) {
    var value = e.detail.value;
    this.setData({
      name: value
    });
  },
  bindSexChange: function (e) {
    this.setData({
      sex: e.detail.value
    });
  },
  bindDateChange:function(e){
    this.setData({
      date: e.detail.value
    })
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  }
})