const date = new Date()
const years = []
const months = []
const days = []

for (let i = date.getFullYear(); i <= date.getFullYear()+1; i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showChoose:false,
    showDatePicker:false,
    showUserPicker:false,
    showAdPicker:false,
    showProjectPicker:false,
    years: years,
    year: date.getFullYear(),
    months: months,
    month: date.getMonth() + 1,
    days: days,
    day: date.getDate(),
    week:'',
    value: [years.indexOf(date.getFullYear()), months.indexOf(date.getMonth() + 1), days.indexOf(date.getDate()), 0],
    ams: ["上", "下"],
    am:"下",
    userType:2,
    userId:22,
    userName:'李晓明22',
    userIndex:[1],
    users:[],
    users1:[
      { name: "李晓明11", status: 0, id: 11 },
      { name: "李晓明12", status: 1, id: 12 },
      { name: "李晓明13", status: 0, id: 13 },
      { name: "李晓明14", status: 1, id: 14 },
      { name: "李晓明15", status: 0, id: 15 }
    ],
    users2: [
      { name: "李晓明21", status: 1, id: 21 },
      { name: "李晓明22", status: 0, id: 22 },
      { name: "李晓明23", status: 1, id: 23 },
      { name: "李晓明24", status: 0, id: 24 },
      { name: "李晓明25", status: 1, id: 25 }
    ],
    projectList:["例行口腔检查","口腔炎症","牙齿正畸","口腔美容","其它"],
    projectIndex:[2],
    addressList: ["日照市海曲路888号简约口腔1", "日照市海曲路888号简约口腔2", "日照市海曲路888号简约口腔3", "日照市海曲路888号简约口腔4", "日照市海曲路888号简约口腔5"],
    addressIndex:[2]
  },
  getDaysInMonth: function (year, month){ 
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
  bindChangeProject: function (e) {
    const val = e.detail.value;
    this.setData({
      projectIndex: val
    });
  },
  bindChangeAddress:function(e){
    const val = e.detail.value;
    this.setData({
      addressIndex: val
    });
  },
  bindChange: function (e) {
    const val = e.detail.value;
    this.getDaysInMonth(this.data.years[val[0]], this.data.months[val[1]]);
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]],
      am:this.data.ams[val[3]]
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
  bindChangeUser:function(e){
    const val = e.detail.value;
    var user = this.data["users" + this.data.userType][val[0]];
    this.setData({
      userId:user.id,
      userName:user.name
    });
  },
  cancelProject:function(){
    this.setData({
      showProjectPicker: false,
      showChoose: false
    });
  },
  cancelAddress:function(){
    this.setData({
      showAdPicker: false,
      showChoose: false
    });
  },
  cancelUser:function(){
    this.setData({
      showUserPicker:false,
      showChoose:false
    });
  },
  cancelDate:function(){
    this.setData({
      showDatePicker: false,
      showChoose: false
    });
  },
  go2ProjectPicker: function () {
    this.setData({
      showProjectPicker: true,
      showDatePicker:false,
      showUserPicker:false,
      showAdPicker:false,
      showChoose: true
    });
  },
  go2AdPicker:function(){
    this.setData({
      showAdPicker: true,
      showProjectPicker: false,
      showDatePicker: false,
      showUserPicker: false,
      showChoose: true
    });
  },
  go2DatePicker:function(){
    this.setData({
      showDatePicker:true,
      showProjectPicker: false,
      showUserPicker: false,
      showAdPicker: false,
      showChoose:true
    });
  },
  go2UserPicker: function () {
    this.setData({
      showUserPicker: true,
      showProjectPicker: false,
      showDatePicker: false,
      showAdPicker: false,
      showChoose: true
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      week: this.getWeek(this.data.year, this.data.month, this.data.day)
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this["selectUserType"+this.data.userType]();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  go2adduser: function (event) {
    var url = "/pages/my/doctor/addUser";
    wx.navigateTo({
      url: url,
      success: function () { }
    });
  },
  selectUserType1: function () {
    var user = this.data["users1"][this.data.userIndex[0]];
    this.setData({
      userType:1,
      users:this.data.users1,
      userId: user.id,
      userName: user.name
    });

    this.setData({
      userIndex: this.data.userIndex
    });
  },
  selectUserType2:function(){
    var user = this.data["users2"][this.data.userIndex[0]];
    this.setData({
      userType: 2,
      users: this.data.users2,
      userId: user.id,
      userName: user.name
    });
    this.setData({
      userIndex: this.data.userIndex
    });
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