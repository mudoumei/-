
// pages/bill/bill.js
const baseUrl=getApp().globalData.baseUrl+'billIcon/';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addHeight:120,
    height:0,
    historyBill:[
    {
      time:'1月10日 星期日',
      list:[
        {
          iconUrl:baseUrl+'catering.png',
          name:'餐饮',
          money:-321,
          type:'expense'
        }]
    },
    {
      time:'1月09日 星期六',
      list:[
        {
          iconUrl:baseUrl+'shopping.png',
          name:'购物',
          money:-300,
          type:'expense'
        },
        {
          iconUrl:baseUrl+'part_time_job.png',
          name:'兼职',
          money:620,
          type:'income'
        }]
    },
    {
      time:'1月08日 星期五',
      list:[
        {
          iconUrl:baseUrl+'clothes.png',
          name:'衣服',
          money:-200,
          type:'expense'
        },
        {
          iconUrl:baseUrl+'traffic.png',
          name:'交通',
          money:-15,
          type:'expense'
        }]
    },
    {
      time:'1月08日 星期五',
      list:[
        {
          iconUrl:baseUrl+'clothes.png',
          name:'衣服',
          money:-200,
          type:'expense'
        },
        {
          iconUrl:baseUrl+'traffic.png',
          name:'交通',
          money:-15,
          type:'expense'
        },
        {
          iconUrl:baseUrl+'snacks.png',
          name:'零食',
          money:-15,
          type:'expense'
        }]
    }
    ],
    historyBillUrl:baseUrl+'history.png',
    addUrl:baseUrl+'add.png'
  },
  goPath(e){
    const dataset = e.currentTarget.dataset;
    const path = dataset.path;
    wx.navigateTo({
        url: path
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
    let systemInfo = wx.getSystemInfoSync();
    let pxToRpxScale = 750 / systemInfo.windowWidth; //px转换到rpx的比例
    let windowHeight = systemInfo.windowHeight*pxToRpxScale;
    let statuHeight = systemInfo.statusBarHeight * pxToRpxScale; //状态栏的高度
    let titleHeight = 44 * pxToRpxScale;
    console.log(windowHeight,statuHeight,titleHeight);
    this.setData({
        height:windowHeight - statuHeight - titleHeight - this.data.addHeight* pxToRpxScale
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