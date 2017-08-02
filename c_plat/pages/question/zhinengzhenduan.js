// pages/question/zhinengzhenduan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    progress1:[
      {id: 1, name: "牙齿疼痛" },
      { id: 2, name: "塞牙" },
      { id: 3, name: "牙松动" },
      { id: 4, name: "牙齿不齐/拥挤/地包天" },
      {id: 5, name: "龋齿" }
    ],
    progress2:[
      { id: 1, name: "夜间/冷热刺激疼" },
      { id: 2, name: "饭后疼痛" },
      { id: 3, name: "咀嚼疼痛" },
      { id: 4, name: "牙龈肿痛" },
      { id: 5, name: "反复性牙区疼痛" }
    ],
    progressList:[],
    progress:1,
    selectProgress1:'',
    selectProgress2:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      progressList:this.data.progress1
    });
  },
  addProgress:function(event){
    
    
    var index = event.currentTarget.dataset.index;
    var key = "selectProgress" + this.data.progress;
    var data = {};
    data["selectProgress" + this.data.progress] = index;
    data.progressList = this.data["progress" + (this.data.progress+1)];
    this.setData(data);

    if (this.data.progress >= 2) {
      console.log(this.selectProgress1);
      console.log(this.selectProgress2);
      // wx.showModal({
      //   title: '提示',
      //   content: '跳转页面,提交内容为：'
      //   + this.data.progress1[this.data.selectProgress1].name + "==="
      //   + this.data.progress2[this.data.selectProgress2].name
      //   ,
      // });
      var url = "/pages/question/zhenduanbaogao";
      wx.navigateTo({
        url: url,
        success: function () { }
      });
      return;
    }

    this.setData({
      progress: this.data.progress + 1
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