const commonHeight=getApp().globalData.commonHeight
Page({
  /**
   * 页面的初始数据
   */
  data: {
    height:commonHeight,
    title:'新建清单',
    theme:'',
    wishList:[
    {
      value:'',
      comeTrue:false
    },
    {
      value:'',
      comeTrue:false
    }],
    wishListTrue:[],
    colors:['#F8BBBB','#C2E0AD','#C9D1FC','#B1D3FF','#EEDEFB','#E8D4E1','#94B0D1','#A6D8EE'],
    themeColor:'#F8BBBB'
  },
  addCount(){
    let list=this.data.wishList;
    list.push(
      {
        value:'',
        comeTrue:false
      });
    this.setData({
      wishList:list
    })
  },
  selectColor(e){
    this.setData({
      themeColor:e.target.dataset.color
    })
  },
  inputBlur(e){
    let index=e.target.dataset.index;
    let value=e.detail.value;
    let list=this.data.wishList;
    list[index].value=value;
    this.setData({
      wishList:list
    })  
  },
  delete(e){
    let listname=e.target.dataset.list;
    let delIndex=e.target.dataset.delindex;
    let list;
    let _this=this;
    list=this.data[listname];
      wx.showModal({        
      title: '是否确定删除内容？',
      success: function (res) {
        if (res.confirm) {                  //点击确定后
               list.splice(delIndex, 1);       //截取指定的内容
               _this.setData({               //重新渲染列表
                  [listname]:list
                })
         }
       }
    })
  },
  save(){

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
    let _this=this;
    const eventChannel = this.getOpenerEventChannel();
    // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
    eventChannel.on('getWishList', function(data) {
      let wishList=[];
      let wishListTrue=[];
      let list=data.data.list;
      list.forEach(ele => {
        if(!ele.comeTrue){
          wishList.push(ele)
        }else{
          wishListTrue.push(ele)
        }
      });
      _this.setData({
        title:'编辑清单',
        theme:data.data.theme,
        wishList:wishList,
        wishListTrue:wishListTrue,
        themeColor:data.data.themeColor
    })
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