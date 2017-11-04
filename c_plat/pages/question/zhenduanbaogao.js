// pages/question/zhenduanbaogao.js
var util = require('../../utils/util.js');
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'',
    gaikuo:'',
    fangan:'',
    cuoshi:'',
    type1:'',
    type2:'',
    count: 80,
    result: '',
    yfcs: [],
    zlfa: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options);
    var type1 = options.type1;
    var type2 = options.type2;
    this.setData({
      type1:type1,
      type2:type2
    });
    this.getBaogao();
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
  go2askquestion:function(){
    // wx.navigateBack({
    //   delta: 5
    // });
    var url = "/pages/question/ask_question";
    wx.navigateTo({
      url: url,
      success: function () { }
    });
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
  getBaogao:function(){
    var type1 = this.data.type1;
    var type2 = this.data.type2;
    // type1 = 'zy';
    // type2 = 'ycyd';
    var _this = this;
    var url = util.getPath() + 'disgnosis/getDisResult';
    app.ajax({
      url: url,
      data: {
        code1: type1,
        code2: type2
      }
    }, function (res) {
      var _data = res.data.data;
      console.log(_data);
      if(_data&&_data.length>0){
        var _o = _data[0];
        _this.setData({
          count:_o.dia_chance,
          result:_o.dia_result,
          yfcs:_o.dia_premunition.split("\\n"),
          zlfa: _o.dia_plan.split("\\n")
        });
      }
      
    });
  }
})