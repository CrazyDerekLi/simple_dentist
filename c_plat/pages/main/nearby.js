var util = require('../../utils/util.js');
const app = getApp()

Page({
  data: {
    basePath:'',
    doctor: true,
    hospitalList: [],
    doctorList: []
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
  go2Doctor: function (e) {
    var index = e.currentTarget.dataset.index;
    var doctor = this.data.doctorList[index];
    var url = "/pages/hospital/doctor?doctorid="+doctor.duser_id;
    wx.navigateTo({
      url: url,
      success: function () { }
    });
  },
  go2Hospital: function (e) {
    var index = e.currentTarget.dataset.index;
    var hospital = this.data.hospitalList[index];
    var url = "/pages/hospital/hospital?hospitalid="+hospital.hos_id;
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
    this.setData({
      basePath: util.getPath()
    });
    this.getDList();
    this.getOList();
  },
  getDList:function(){
    var _this = this;
    wx.getLocation({
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var url = util.getPath() + 'doctor/getdoctorInfo';
        var params = {
          longitade: longitude,
          latitude: latitude,
          raidus: 10000
        };
        app.ajax({ url: url, data: params }, function (res) {
          var _data = res.data.data;
          console.log(_data);
          _this.setData({
            doctorList: _data
          });
        });
      }
    });
  },
  getOList:function(){
    var _this = this;
    wx.getLocation({
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        var url = util.getPath() + 'hospital/gethospitalInfo';
        var params = {
          longitade: longitude,
          latitude: latitude,
          raidus:10000
        };
        app.ajax({ url: url ,data:params}, function (res) {
          var _data = res.data.data;
          console.log(_data);
          _this.setData({
            hospitalList: _data
          });
        });
      }
    });

    
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})