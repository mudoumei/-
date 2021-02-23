// components/add/add.js
const baseUrl=getApp().globalData.baseUrl+'add/';
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isShow:{
      type:Boolean,
      value:false
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    modules:[
      {imageUrl:baseUrl+'bill.png',
        title:'账本',
        pagePath: "/pages/bill/bill"
      },
      {imageUrl:baseUrl+'mome.png',
        title:'便签',
        pagePath: "/pages/mome/mome"
      },
      {imageUrl:baseUrl+'collect.png',
        title:'收藏',
        pagePath: "/pages/collect/collect"
      },
      {imageUrl:baseUrl+'dairy.png',
        title:'日记本',
        pagePath: "/pages/dairy/dairy"
      },
      {imageUrl:baseUrl+'calendar.png',
        title:'日历',
        pagePath: "/pages/calendar/calendar"
      },
      {imageUrl:baseUrl+'weekPlan.png',
        title:'周计划',
        pagePath: "/pages/weekPlan/weekPlan"
      },
      {imageUrl:baseUrl+'monthPlan.png',
        title:'月计划',
        pagePath: "/pages/monthPlan/monthPlan"
      },
      {imageUrl:baseUrl+'wishList.png',
        title:'心愿清单',
        pagePath: "/pages/wishList/wishList"
      }
    ],
    closeUrl:baseUrl+'close.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {  
    closePage(){
      this.triggerEvent('closeAdd');
    },
    goPath(e){
      const dataset = e.currentTarget.dataset;
      const path = dataset.path;
      wx.navigateTo({
          url: path
      })
    }
  }
})
