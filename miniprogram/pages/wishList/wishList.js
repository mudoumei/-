// pages/wishList/wishList.js
const commonHeight=getApp().globalData.commonHeight
const baseUrl = getApp().globalData.baseUrl;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    height:commonHeight,
    imgUrl:baseUrl+'wishList/wishList.png',
    addImgUrl:baseUrl+'billIcon/add.png',
    wishList:[
      {
        theme:'心愿书单',
        list:[
          {
            name:'《一头栽进月光里》 普二丁',
            comeTrue:false
          },
          {
            name:'《撒野》 巫哲',
            comeTrue:false
          },
          {
            name:'《时生》 东野圭吾',
            comeTrue:false
          },
          {
            name:'《一个人住的每一天》 高木直子',
            comeTrue:true
          }
        ],
        themeColor:'#B1D3FF'
      },
      {
        theme:'彩妆清单',
        list:[
          {
            name:`I'M MEN  007`,
            comeTrue:false
          },
          {
            name:'COLORKEY  R702',
            comeTrue:true
          },
          {
            name:'兰芝唇膜',
            comeTrue:false
          }
        ],
        themeColor:'#C9D1FC'
      },
      {
        theme:'彩妆清单',
        list:[
          {
            name:`I'M MEN  007`,
            comeTrue:false
          },
          {
            name:'COLORKEY  R702',
            comeTrue:false
          },
          {
            name:'兰芝唇膜',
            comeTrue:false
          },{
            name:'COLORKEY  R702',
            comeTrue:false
          },
          {
            name:'兰芝唇膜',
            comeTrue:false
          }
        ],
        themeColor:'#F8BBBB'
      }
      
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  addWish(){
    wx.navigateTo({
      url: '/pages/addWishList/addWishList',
    })
  },
  onLoad: function (options) {
      
  },
  goDetail(){
    wx.navigateTo({
      url: '/pages/wishListDetail/wishListDetail'
    })
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