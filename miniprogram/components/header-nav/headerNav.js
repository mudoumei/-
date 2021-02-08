// components/headerNav/headerNav.js
const app=getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title :{
      type: String,
      value: ''
    },
    addHeight:{
      type: Number,
      value: 0
    }

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  ready: function (options) {
    let systemInfo = wx.getSystemInfoSync();
    let pxToRpxScale = 750 / systemInfo.windowWidth; //px转换到rpx的比例
    let fontSize = systemInfo.fontSizeSetting * pxToRpxScale;// 用户设置的字体大小
    let statuHeight = systemInfo.statusBarHeight * pxToRpxScale; //状态栏的高度
    let titleHeight = 44 * pxToRpxScale;
    this.setData({
      fontSize: fontSize,
      statuHeight: statuHeight, 
      titleHeight: titleHeight,
      height:titleHeight+statuHeight+this.properties.addHeight
    })
  },
})
