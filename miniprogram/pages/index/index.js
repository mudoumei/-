// index.js
// 获取应用实例
var amapFile = require('../../utils/amap-wx.js');
var timeUtils  =require('../../utils/time-utils.js')
const globalDate=getApp().globalData
Page({
  /**
   * 页面的初始数据
   */
  data: {
    weather:{
      type:'',
      temperature:''
    },
    baseUrl:'cloud://online-note-6gqj2hvff9ca44ee.6f6e-online-note-6gqj2hvff9ca44ee-1304944671/home/',
    weeks: ["Sun.", "Mon.", "Tue.", "Wes.", "Thu.", "Fri.", "Sat."],
    months:['January','February','March','April','May','June','July','August','September','October','November','December'],
    weatherIcons:['rain.png','sunny.png','overcast.png','cloudy','snow'],
    IconUrl:'',
    curTime:'',
    curWeek:'',
    height:''
  },
  getWeather(){
    var that = this;
    var myAmapFun = new amapFile.AMapWX({key:'1c8b4d59b7d271fc7f86206790ae0d0c'});
    myAmapFun.getWeather({
      success: function(res){
        let type =res.weather.data;
        let index=0;
       if(type.includes('雨')){
          index=0;
       }else if(type.includes('晴')){
          index=1;
       }else if(type.includes('阴')){
        index=2;
       }else if(type.includes('雪')){
        index=3;
       }else if(type.includes('晴')){
        index=4;
       }
        that.setData({
          weather:{
            type:res.weather.data,
            temperature:res.temperature.data+'℃'
          },
          IconUrl:that.data.baseUrl+that.data.weatherIcons[index]
        }),
        console.log(that.data.weather.type.indexOf('云'));
      },
      fail: function(info){
        //失败回调
        console.log(info)
      }
    })
  },
  getTime(){
    console.log(this.data.weeks);
    let date = new Date();
    let year=date.getFullYear();
    let month=this.data.months[date.getMonth()];
    let week =this.data.weeks[date.getDay()];
    let day=date.getDate();
    this.setData({
      curTime:''+month+' '+day,
      curWeek:week
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getWeather();
      this.getTime();
     
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    let {windowHeight,statuHeight,pxToRpxScale,titleHeight}=globalDate
    let tabHeight =49 * pxToRpxScale;
    console.log(windowHeight,statuHeight,titleHeight,tabHeight);
    this.setData({
        height:windowHeight - statuHeight - titleHeight - tabHeight
      })
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