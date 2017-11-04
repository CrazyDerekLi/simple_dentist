// pages/my/mouth.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toothQuestionList:[
      { x: 'l', y: 't', typeCode: '1', count: 3 },
      { x: 'r', y: 'b', typeCode: '3', count: 7 },
      { x: 'l', y: 'b', typeCode: '4', count: 4 },
      { x: 'r', y: 't', typeCode: '5', count: 2 }
    ],
    toothShowList:[],
    toothDefaultList:[
      { x: 'l', y: 't', typeCode: '2', count: 1 },
      { x: 'l', y: 't', typeCode: '2', count: 2 },
      { x: 'l', y: 't', typeCode: '2', count: 3 },
      { x: 'l', y: 't', typeCode: '2', count: 4 },
      { x: 'l', y: 't', typeCode: '2', count: 5 },
      { x: 'l', y: 't', typeCode: '2', count: 6 },
      { x: 'l', y: 't', typeCode: '2', count: 7 },
      { x: 'l', y: 't', typeCode: '2', count: 8 },

      { x: 'r', y: 't', typeCode: '2', count: 1 },
      { x: 'r', y: 't', typeCode: '2', count: 2 },
      { x: 'r', y: 't', typeCode: '2', count: 3 },
      { x: 'r', y: 't', typeCode: '2', count: 4 },
      { x: 'r', y: 't', typeCode: '2', count: 5 },
      { x: 'r', y: 't', typeCode: '2', count: 6 },
      { x: 'r', y: 't', typeCode: '2', count: 7 },
      { x: 'r', y: 't', typeCode: '2', count: 8 },

      { x: 'l', y: 'b', typeCode: '2', count: 1 },
      { x: 'l', y: 'b', typeCode: '2', count: 2 },
      { x: 'l', y: 'b', typeCode: '2', count: 3 },
      { x: 'l', y: 'b', typeCode: '2', count: 4 },
      { x: 'l', y: 'b', typeCode: '2', count: 5 },
      { x: 'l', y: 'b', typeCode: '2', count: 6 },
      { x: 'l', y: 'b', typeCode: '2', count: 7 },
      { x: 'l', y: 'b', typeCode: '2', count: 8 },

      { x: 'r', y: 'b', typeCode: '2', count: 1 },
      { x: 'r', y: 'b', typeCode: '2', count: 2 },
      { x: 'r', y: 'b', typeCode: '2', count: 3 },
      { x: 'r', y: 'b', typeCode: '2', count: 4 },
      { x: 'r', y: 'b', typeCode: '2', count: 5 },
      { x: 'r', y: 'b', typeCode: '2', count: 6 },
      { x: 'r', y: 'b', typeCode: '2', count: 7 },
      { x: 'r', y: 'b', typeCode: '2', count: 8 }
    ],
    toothList:[
      { code: '1', name: '蛀牙', color: '#7e7b7f' },
      { code: '3', name: '炎症', color: '#ffff43' },
      { code: '4', name: '缺牙', color: '#66aef7' },
      { code: '5', name: '有病', color: '#f6ad3c' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var toothQuestionList = this.data.toothQuestionList;
    var toothDefaultList = this.data.toothDefaultList;
    var result = [];
    for(var i=0;i<toothDefaultList.length;i++){
      var o = {
        x: toothDefaultList[i].x,
        y: toothDefaultList[i].y,
        typeCode: toothDefaultList[i].typeCode,
        count: toothDefaultList[i].count
      };
      for(var j=0;j<toothQuestionList.length;j++){
        var _o = toothQuestionList[j];
        if(_o.x == o.x && _o.y == o.y && _o.count == o.count){
          o.typeCode = _o.typeCode;
        }
      }
      result.push(o);
    }
    this.setData({
      toothShowList:result
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