// pages/addWeekPlan/addWeekPlan.js
const commonHeight = getApp().globalData.commonHeight;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height: commonHeight,
    weekdays: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    colors: ['#A7CAF8', '#E1D4EB', '#FBC7C7', '#C6DCB7', '#8BCADB', '#FFCDB2', '#FFE4B7'],
    dayPlan: []
  },
  addCount(e) {
    let listname = e.target.dataset.list;
    console.log(listname);
    // this.setData({
    //   [listname]: [
    //     ... this.data[listname],
    //     {
    //       value:'',
    //       comeTrue:false
    //     }
    //   ]
    // })
  },
  inputBlur(e) {
    let index = e.target.dataset.index;
    let listname = e.target.dataset.list;
    let value = e.detail.value;
    let list = this.data[listname];
    list[index].value = value;
    this.setData({
      [listname]: list
    })
    console.log(this.data[listname]);
  },
  delete(e) {
    let listname = e.target.dataset.list;
    let delIndex = e.target.dataset.delindex;
    let list;
    let _this = this;
    list = this.data[listname];
    wx.showModal({
      title: '是否确定删除内容？',
      success: function (res) {
        if (res.confirm) { //点击确定后
          list.splice(delIndex, 1); //截取指定的内容
          _this.setData({ //重新渲染列表
            [listname]: list
          })
        }
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
    let list = [{
        value: '',
        finished: false
      },
      {
        value: '',
        finished: false
      }
    ]
    this.setData({
      wholeWeekPlan: list,
      insistOnPlan: list,
      MonPlan: list,
      TuePlan: list,
      WedPlan: list,
      ThuPlan: list,
      FriPlan: list,
      SatPlan: list,
      SunPlan: list,
      dayPlan: {
        MonPlan: list,
        TuePlan: list,
        WedPlan: list,
        ThuPlan: list,
        FriPlan: list,
        SatPlan: list,
        SunPlan: list,
      }
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