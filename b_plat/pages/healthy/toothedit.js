// pages/healthy/toothedit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showTypePicker:false,
    showTypePickerInfo:'',
    selectedRowName:'',
    selectedToothName:'',
    typeList:[{
      id: 0, typeName: '请选择', typeColor:'#c7c7c7'
    },{
        id: 1, typeName: '类型1', typeColor:'#eeab5d'
    },{
        id: 2, typeName: '类型2', typeColor:'#30a1d3'
    }, {
      id: 3, typeName: '类型3', typeColor: '#7e7a7e'
    }],
    typeSelectedList:[
      [2, 1, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 2, 0, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 0]
    ],
    typeIndex:[1]
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
  hidePicker:function(){
    this.setData({
      showTypePicker:false,
      showTypePickerInfo:''
    });
  },
  bindChangeType:function(event){
    var val  = event.detail.value;
    var info = this.data.showTypePickerInfo;
    var rowIndex = info.split(",")[0];
    var colIndex = info.split(",")[1];
    var typeSelectedList = this.data.typeSelectedList;
    typeSelectedList[rowIndex][colIndex] = val[0];
    this.setData({
      typeSelectedList: typeSelectedList
    });
  },
  showTypePicker:function(event){
    var info = event.currentTarget.dataset.index;
    var rowIndex = info.split(",")[0];
    var colIndex = info.split(",")[1];
    this.setData({
      showTypePicker:true,
      showTypePickerInfo: info,
      selectedRowName: 
        rowIndex == "0" ? "右上" : rowIndex == "1" ? "右下" : rowIndex == "2" ? "左上" :"左下",
      selectedToothName: (rowIndex == "0" || rowIndex == "1") ? 8 - parseInt(colIndex) : parseInt(colIndex)+1,
      typeIndex:[
        this.data.typeSelectedList[rowIndex][colIndex]
      ]
    });
  },
  saveAndGoBack:function(){
    wx.navigateBack({
      delta:1
    })
  }
})