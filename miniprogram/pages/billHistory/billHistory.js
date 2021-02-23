// pages/billHistory/billHistory.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addHeight:100,
    height:0,
    yearBalance:'65700.12',
    yearIncome:'12325.21',
    yearExpanse:'10245.33',
    yearBill:[
      {
        month:'12',
        income:'10000.00',
        expanse:'5000.00',
        balance:'5000.00'
      },
      {
        month:'11',
        income:'0.00',
        expanse:'5000.50',
        balance:'-5000.50'
      },
      {
        month:'10',
        income:'12293.23',
        expanse:'2190.00',
        balance:'10100.23'
      },
      {
        month:'9',
        income:'10000.00',
        expanse:'5000.00',
        balance:'5000.00'
      },
      {
        month:'8',
        income:'10000.00',
        expanse:'5000.00',
        balance:'5000.00'
      },
      {
        month:'7',
        income:'10000.00',
        expanse:'5000.00',
        balance:'5000.00'
      },
      {
        month:'6',
        income:'0.00',
        expanse:'5000.50',
        balance:'-5000.50'
      },
      {
        month:'5',
        income:'12293.23',
        expanse:'2190.00',
        balance:'10100.23'
      },
      {
        month:'4',
        income:'10000.00',
        expanse:'5000.00',
        balance:'5000.00'
      },
      {
        month:'3',
        income:'10000.00',
        expanse:'5000.00',
        balance:'5000.00'
      },
      {
        month:'2',
        income:'10000.00',
        expanse:'5000.00',
        balance:'5000.00'
      },
      {
        month:'1',
        income:'10000.00',
        expanse:'5000.00',
        balance:'5000.00'
      }
    ]
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
    this.setData({
        height:windowHeight - statuHeight - titleHeight - this.data.addHeight* pxToRpxScale - 60,
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