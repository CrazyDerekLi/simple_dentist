const date = new Date()
const years = []
const months = []
const days = []

for (let i = date.getFullYear(); i <= date.getFullYear() + 1; i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}
// pages/my/mouth.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mouthEditShow:false,
    jianchaShow:false,
    jihuaShow:false,
    amountShow:false,
    jianchaInfo:'',
    jianchaArray:[],
    jihuaInfo:'',
    jihuaArray: [],
    amount:100,
    dateShow:false,
    years: years,
    year: date.getFullYear(),
    months: months,
    month: date.getMonth() + 1,
    days: days,
    day: date.getDate(),
    week: '',
    value: [years.indexOf(date.getFullYear()), months.indexOf(date.getMonth() + 1), days.indexOf(date.getDate()), 0],
    ams: ["上", "下"],
    am: "下",
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
  hideEdit:function(){
    this.setData({
      jianchaShow: false,
      jihuaShow: false,
      amountShow:false,
      dateShow:false
    });
  },
  showMouthEdit:function(){
    this.setData({
      mouthEditShow:true
    });
  },
  showJiancha:function(){
    this.setData({
      jianchaShow:true,
      jihuaShow: false,
      amountShow: false,
      dateShow:false
    });
  }, 
  showJihua: function () {
    this.setData({
      jianchaShow: false,
      jihuaShow: true,
      amountShow: false,
      dateShow: false
    });
  },
  showAmount: function () {
    this.setData({
      jianchaShow: false,
      jihuaShow: false,
      amountShow: true,
      dateShow: false
    });
  },
  showDatePicker:function(){
    this.setData({
      jianchaShow: false,
      jihuaShow: false,
      amountShow: false,
      dateShow: true
    });
  },
  setJiancha: function (event){
    this.setData({
      jianchaInfo: event.detail.value,
      jianchaArray: event.detail.value.split("\n")
    });
  },
  setJihua: function (event){
    this.setData({
      jihuaInfo: event.detail.value,
      jihuaArray: event.detail.value.split("\n")
    });
  },
  setAmount: function (event) {
    this.setData({
      amount: event.detail.value
    });
  },
  getDaysInMonth: function (year, month) {
    month = parseInt(month, 10); //parseInt(number,type)这个函数后面如果不跟第2个参数来表示进制的话，默认是10进制。 
    var temp = new Date(year, month, 0);
    var daysCount = temp.getDate();
    this.setData({
      days: days.slice(0, daysCount)
    });
    return daysCount;
  },
  getWeek: function (year, month, day) {
    var arr = ['日', '一', '二', '三', '四', '五', '六'];
    var week = new Date(year + '-' + month + '-' + day).getDay();
    return arr[week];
  },
  bindChange: function (e) {
    const val = e.detail.value;
    this.getDaysInMonth(this.data.years[val[0]], this.data.months[val[1]]);
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]],
      am: this.data.ams[val[3]]
    });
    this.setData({
      value: [
        this.data.years.indexOf(this.data.year),
        this.data.months.indexOf(this.data.month),
        this.data.days.indexOf(this.data.day),
        this.data.ams.indexOf(this.data.am)
      ]
    });
    this.setData({
      week: this.getWeek(this.data.year, this.data.month, this.data.day)
    });
  },
  go2EditPage:function(){
    this.setData({
      mouthEditShow:false
    });
    var url = "/pages/healthy/toothedit";
    wx.navigateTo({
      url: url,
      success: function () { }
    });
  },
  saveAndGoBack:function(){
    this.hideEdit();
    wx.navigateBack({
      delta:1
    })
  }
})