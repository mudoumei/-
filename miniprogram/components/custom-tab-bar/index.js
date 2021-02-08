const app = getApp();
Component({
  data: {
    isAdd:false,
    addAnimate:'',
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#b3b1f1",
    list: [{
      pagePath: "/pages/index/index",
      iconPath: "/asset/image/homeIcon.png",
      selectedIconPath: "/asset/image/homeIcon2.png",
      text: "首 页",
      isSpecial: false
    }, {
      pagePath: "",
      iconPath: "/asset/image/add.png",
      selectedIconPath: "/asset/image/add.png",
      text: "",
      isSpecial: true
    }, {
      pagePath: "/pages/recommend/recommend",
      iconPath: "/asset/image/recommendIcon.png",
      selectedIconPath: "/asset/image/recommendIcon2.png",
      text: "我的",
      isSpecial: false
    }],
    //适配IphoneX的屏幕底部横线
    // isIphoneX: app.globalData.isIphoneX
  },
  properties: {
    active: {
      type: Number,
      value: 0
    }
},
  pageLifetimes:{
    show(){
      this.setData({
        selected:this.properties.active
      })
    },
  },
  methods: {
    closeAdd(){
      this.setData({
        isAdd : false
      })
    },
    switchTab(e) {
      const dataset = e.currentTarget.dataset
      const path = dataset.path
      const index = dataset.index
      //如果是特殊跳转界面
      if (this.data.list[index].isSpecial) {  
        this.setData({
          isAdd : true,
        })
        // wx.navigateTo({
        //   url: path
        // })
      } else {
        //正常的tabbar切换界面
        wx.switchTab({
          url: path
        })
        this.setData({
          selected: index
        })
      }
    }
  }
})
