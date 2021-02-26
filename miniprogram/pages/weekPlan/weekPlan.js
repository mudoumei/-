// pages/weekPlan/weekPlan.js
const baseUrl = getApp().globalData.baseUrl+'weekPlan/';
const commonHeight = getApp().globalData.commonHeight;
var util = require("../../utils/time-utils.js");
Page({
  /**
   * 页面的初始数据
   */
  data: {
    height:commonHeight,
    imgUrl:baseUrl+'calendarbg.png',
    colors:['#A7CAF8','#E1D4EB','#FBC7C7','#C6DCB7','#8BCADB','#FFCDB2','#FFE4B7'],
    weekPlan:{
      startTime:'01.25',
      endTime:'01.31',
      wholeWeekPlan:[
        {
          value:'观看电影《肖申克的救赎》hhhhhh',
          finished:false
        },
        {
          value:'阅读《穿条纹睡衣的男孩》',
          finished:true
        },
        {
          value:'阅读一本《神奇的树屋》',
          finished:false
        }
      ],
      PlanList:[
      {
        time:'2021.01.25',
        day:'Mon',
        list:[
          {
            value:'背50个单词55555555',
            finished:false
          },
          {
            value:'看2小时教程',
            finished:true
          },
          {
            value:'下班与朋友聚餐',
            finished:true
          },
          {
            value:'背50个单词',
            finished:false
          },
          {
            value:'看2小时教程',
            finished:true
          },
          {
            value:'下班与朋友聚餐',
            finished:true
          }
        ]
      },
      {
        time:'2021.01.26',
        day:'Tue',
        list:[
          {
            value:'背50个单词88888888',
            finished:false
          },
          {
            value:'看2小时教程',
            finished:true
          },
          {
            value:'下班与朋友聚餐',
            finished:false
          },
          {
            value:'背50个单词88888888',
            finished:false
          },
          {
            value:'看2小时教程',
            finished:true
          },
          {
            value:'下班与朋友聚餐',
            finished:false
          }
        ]
      },
      {
        time:'2021.01.27',
        day:'Wed',
        list:[
          {
            value:'背50个单词',
            finished:false
          },
          {
            value:'看2小时教程',
            finished:true
          },
          {
            value:'下班与朋友聚餐',
            finished:false
          }
        ]
      },
      {
        time:'2021.01.28',
        day:'Thu',
        list:[
          {
            value:'背50个单词',
            finished:false
          },
          {
            value:'看2小时教程',
            finished:true
          },
          {
            value:'下班与朋友聚餐',
            finished:false
          }
        ]
      },
      {
        time:'2021.01.29',
        day:'Fri',
        list:[
          {
            value:'背50个单词',
            finished:false
          },
          {
            value:'看2小时教程',
            finished:true
          },
          {
            value:'下班与朋友聚餐',
            finished:false
          }
        ]
      },
      {
        time:'2021.01.30',
        day:'Sat',
        list:[
          {
            value:'背50个单词',
            finished:false
          },
          {
            value:'看2小时教程',
            finished:true
          },
          {
            value:'下班与朋友聚餐',
            finished:false
          }
        ]
      },
      {
        time:'2021.01.31',
        day:'Sun',
        list:[
          {
            value:'背50个单词',
            finished:false
          },
          {
            value:'看2小时教程',
            finished:true
          },
          {
            value:'下班与朋友聚餐',
            finished:false
          }
        ]
      }
    ]
  }
  },
  currentChange(e){
    this.setData({
      current:e.detail.current
    })
  },
  createPlan(){
    wx.navigateTo({
      url: '/pages/addWeekPlan/addWeekPlan',
    })
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
   let today= new Date();
   let curDay=util.getCurrenrWeek();
   var mondayTime =util.getDateStr(today - curDay * 24 * 60 * 60 * 1000);
  this.setData({
    current:curDay,
    mondayTime:mondayTime
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