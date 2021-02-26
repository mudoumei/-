// components/headerNav/headerNav.js
const globalDate=getApp().globalData
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
    },
    isBack:{
      type:Boolean,
      value:false
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
    goback(){
      wx.navigateBack({
        delta: 1
      })
    }
  },
  ready: function (options) {
    let {fontSize,statuHeight,pxToRpxScale,titleHeight}=globalDate
    this.setData({
      fontSize: fontSize,
      statuHeight: statuHeight, 
      titleHeight: titleHeight,
      height:titleHeight+statuHeight+this.properties.addHeight* pxToRpxScale
    })
  },
})
