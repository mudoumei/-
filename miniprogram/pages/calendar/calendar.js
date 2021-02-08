
var util = require("../../utils/time-utils.js");
// pages/calendar/calendar.js
Page({

  /**
   * 页面的初始数据
   */
  // properties: {
  //   timeBean: { // 属性名 在wxml调用组件时利用该属性传递组件显示的数据
  //     type: Object, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型） 
  //     value: ''// 属性初始值（可选），如果未指定则会根据类型选择一个
  //   },
  // },
  data: {
    selectWeek:0,
    timeBean:{}
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
    this.setData({
      timeBean: util.getWeekDayList(this.data.selectWeek)
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

  },
  lastWeek:function(e){   
    var selectWeek = --this.data.selectWeek;
    var timeBean = this.data.timeBean
    timeBean = util.getWeekDayList(selectWeek)
    if (selectWeek != 0) {
      timeBean.selectDay = 0;
      timeBean.yearMonth = timeBean.weekDayList[0].ymonth;
    }
 
    this.setData({
      timeBean,
      selectWeek
    })
  },
 
  /**
   * 点击了下一周，选择周数字加一，然后直接调用工具类中一个方法获取到数据
   */
  nextWeek:function(e){
    var selectWeek = ++this.data.selectWeek;
    var timeBean = this.data.timeBean
    timeBean = util.getWeekDayList(selectWeek)
    if (selectWeek != 0){
      timeBean.selectDay = 0;
      timeBean.yearMonth = timeBean.weekDayList[0].ymonth;
      console.log();
    }
 
    this.setData({
      timeBean,
      selectWeek
    })
  },
 
  /**
   * 选中了某一日，改变selectDay为选中日
   */ 
  dayClick:function(e){
    var timeBean = this.data.timeBean
    timeBean.selectDay = e.currentTarget.dataset.index;
    timeBean.yearMonth = timeBean.weekDayList[e.currentTarget.dataset.index].ymonth;
    console.log(e.currentTarget);
    this.setData({
      timeBean,
    });
  },

})