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
      },
      {imageUrl:baseUrl+'mome.png',
        title:'便签',
      },
      {imageUrl:baseUrl+'collect.png',
        title:'收藏',
      },
      {imageUrl:baseUrl+'dairy.png',
        title:'日记本',
      },
      {imageUrl:baseUrl+'calendar.png',
        title:'日历',
      },
      {imageUrl:baseUrl+'weekPlan.png',
        title:'周计划',
      },
      {imageUrl:baseUrl+'monthPlan.png',
        title:'月计划',
      },
      {imageUrl:baseUrl+'wishList.png',
        title:'心愿清单',
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
    }
  }
})
