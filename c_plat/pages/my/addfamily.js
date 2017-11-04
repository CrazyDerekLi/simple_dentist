var util = require('../../utils/util.js');
const app = getApp()
// pages/my/addfamily.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    basePath: '',
    btnContent:"确认添加",
    id:'',
    fileId: '',
    name: '',
    age: '',
    sex: 1,
    tel: '',
    sexList: ['女', '男'],
    region: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      basePath: util.getPath()
    });
    if (options.familyid){
      this.setData({
        id: options.familyid
      });
      this.getFamilyData(options.familyid);
    }
  },
getFamilyData:function(id){
  var _this = this;
  var url = util.getPath() + 'user/getfamilyuserinfo?fuserid=' + id;
  app.ajax({ url: url }, function (res) {
    var _data = res.data.data.fuserInfo;
    var _familyDetail = _data[0]||{};
    console.log(_familyDetail);
    var region = _familyDetail.fuser_city||'[]';
    var picUrl = _familyDetail.pic_path||'';
    if(picUrl){
      picUrl = _this.data.basePath+picUrl;
    }
    _this.setData({
      btnContent:'确认修改',
      id:id,
      filePath: picUrl,
      name: _familyDetail.fuser_name||'',
      age: _familyDetail.fuser_age||'',
      sex: _familyDetail.fuser_sex,
      tel: _familyDetail.fuser_tel||'',
      region: JSON.parse(region)
    });
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
  go2Add:function(){
    wx.navigateBack({
      delta:1
    });
  },
  bindSexChange:function(e){
    this.setData({
      sex: e.detail.value
    });
  },
  bindRegionChange: function (e) {
    this.setData({
      region: e.detail.value
    })
  },
  choosePhoto:function(){
    var _this = this;
    wx.chooseImage({
      count:1,
      sizeType: ["compressed"],
      success: function(res) {
        var tempFilePaths = res.tempFilePaths;
        console.log(res);
        if (tempFilePaths[0]) {
          _this.setData({
            filePath: tempFilePaths[0]
          });
          var fileUploadUrl = util.getPath() + 'upload/uploadImage';
          wx.uploadFile({
            url: fileUploadUrl,
            filePath: tempFilePaths[0],
            name: 'imgFile',
            success: function (res) {
              console.log(res);
              var fileId = res.data||'';
              _this.setData({
                fileId:fileId
              });
            }
          });
        }
      }
    })
  },
  changeName:function(e){
    var value = e.detail.value;
    this.setData({
      name: value
    });
  },
  changeAge: function (e) {
    var value = e.detail.value;
    this.setData({
      age: value
    });
  },
  changeTel: function (e) {
    var value = e.detail.value;
    this.setData({
      tel: value
    });
  },
  saveData:function(){
    var _this = this;
    
    
    util.getUserInfo(function (info) {
      var params = {
        id: _this.data.id || '',
        userid: info.CUS_ID || '',
        imgid: _this.data.fileId || '',
        name: _this.data.name || '',
        age: _this.data.age || '',
        sex: _this.data.sex || '',
        city: JSON.stringify(_this.data.region) || '',
        tel: _this.data.tel || ''
      };
      var url = util.getPath() + 'user/insertfamilyuser';
      app.ajax({ url: url, data:params }, function (res) {
        var _data = res.data.data;
        wx.navigateBack({
          delta: 1
        })
      });
    });
   
  }
})