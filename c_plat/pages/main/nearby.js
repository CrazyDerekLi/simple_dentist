Page({
  data: {
    doctor: true,
    hospitalList: [
      {
        icon: "https://dingdongyy.net/hospital-webapp/xcx/product.png",
        id: "1",
        title: "日照市口腔医院",
        address: "山东省日照市东港区",
        phone: "15863149556",
        person: 346,
        latitude: 0,
        longitude: 0,
        distance: "2.8km"
      }, {
        icon: "https://dingdongyy.net/hospital-webapp/xcx/product.png",
        id: "2",
        title: "口腔医学院",
        address: "山东省日照市东港区",
        phone: "0531-2221122",
        person: 26,
        latitude: 0,
        longitude: 0,
        distance: "2.9km"
      }, {
        icon: "https://dingdongyy.net/hospital-webapp/xcx/product.png",
        id: "1",
        title: "日照市口腔医院",
        address: "山东省日照市东港区",
        phone: "15863149556",
        person: 346,
        latitude: 0,
        longitude: 0,
        distance: "2.8km"
      }, {
        icon: "https://dingdongyy.net/hospital-webapp/xcx/product.png",
        id: "2",
        title: "口腔医学院",
        address: "山东省日照市东港区",
        phone: "0531-2221122",
        person: 26,
        latitude: 0,
        longitude: 0,
        distance: "2.9km"
      }
    ]
  },
  closeMsg: function () {
    var that = this;
    this.setData({
      msgHidden: true
    });
  },
  chooseSwitch: function () {
    var doctor = !this.data.doctor;
    this.setData({
      doctor: doctor
    });
  },
  go2Doctor: function () {
    var url = "/pages/hospital/doctor";
    wx.navigateTo({
      url: url,
      success: function () { }
    });
  },
  go2Hospital: function () {
    var url = "/pages/hospital/hospital";
    wx.navigateTo({
      url: url,
      success: function () { }
    });
  },
  changeO:function(event){
    this.setData({
      doctor:false
    });
  },
  changeD:function(event){
    this.setData({
      doctor: true
    });
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})