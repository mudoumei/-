// app.js
App({
  globalData: {
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    //云开发函数的初始化
    wx.cloud.init(
      {
        env:"online-note-6gqj2hvff9ca44ee"
      }
    )
    },
  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    let systemInfo = wx.getSystemInfoSync();
    let pxToRpxScale = 750 / systemInfo.windowWidth; //px转换到rpx的比例
    let fontSize = systemInfo.fontSizeSetting * pxToRpxScale;// 用户设置的字体大小
    let statuHeight = systemInfo.statusBarHeight * pxToRpxScale; //状态栏的高度
    let windowHeight = systemInfo.windowHeight*pxToRpxScale;
    let titleHeight = 44 * pxToRpxScale;
    let commonHeight=windowHeight-titleHeight-statuHeight
    this.globalData={
      baseUrl: 'cloud://online-note-6gqj2hvff9ca44ee.6f6e-online-note-6gqj2hvff9ca44ee-1304944671/',
      fontSize: fontSize,
      pxToRpxScale:pxToRpxScale,
      statuHeight: statuHeight, 
      windowHeight: windowHeight,
      titleHeight:titleHeight,
      commonHeight:commonHeight
    }
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})

