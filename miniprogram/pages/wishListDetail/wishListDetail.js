// pages/wishListDetail/wishListDetail.js
const globalDate=getApp().globalData
const commonHeight=getApp().globalData.CommonHeight
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height:commonHeight+'',
    wishList: {
      theme:'心愿书单',
      list:[
        {
          value:'《一头栽进月光里》 普二丁',
          comeTrue:true
        },
        {
          value:'《撒野》 巫哲',
          comeTrue:false
        },
        {
          value:'《时生》 东野圭吾',
          comeTrue:false
        },
        {
          value:'《一个人住的每一天》 高木直子',
          comeTrue:true
        },
        {
          value:'《云边的小卖部》 张嘉佳',
          comeTrue:true
        },
        {
          value:'《啊 2.0》 大冰',
          comeTrue:false
        }
      ],
      themeColor:'#B1D3FF'
    },
  },
  edit(){
    let _this=this;
    wx.navigateTo({
      url: '/pages/addWishList/addWishList',
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        getWishList: function(data) {
          console.log(data)
        }
      },
      success: function(res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('getWishList', { data: _this.data.wishList})
      }
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