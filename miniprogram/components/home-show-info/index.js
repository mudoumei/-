// components/home-show-info/index.js
const baseUrl=getApp().globalData.baseUrl;
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    scheduleList:[
      {
        time:'全天',
        theme:'某某某生日'
      },
      {
        time:'10:00',
        theme:'工作会议'
      }
    ],
    billList:[
      {
        time:'10:58',
        type:'收入',
        iconUrl:baseUrl+'billIcon/part_time_job.png',
        detail:'兼职',
        money:'+100'
      },
      {
        time:'14:32',
        type:'购物',
        iconUrl:baseUrl+'billIcon/shopping.png',
        detail:'帽子',
        money:'-50',
      },
      {
        time:'18:35',
        type:'餐饮',
        iconUrl:baseUrl+'billIcon/catering.png',
        detail:'晚餐',
        money:'-50',
      }
    ],
    weekPlan:{
      day:'Mon.',
      wholeWeekPlan:[
        {
          detail:'观看电影《肖申克的救赎》',
          finished:false,
        },
        {
          detail:'阅读《穿条纹睡衣的男孩》',
          finished:true,
        }
      ],
      TodayPlan:[
        {
          detail:'背50个英语单词',
          finished:false,
        },
        {
          detail:'跑步两公里',
          finished:true,
        }
       ]
    },
    monthPlan:{
      date:'02.02',
      TodayPlan:[
        {
          detail:'开题答辩ppt制作',
          finished:true,
        },
        {
          detail:'观看小程序案例教程',
          finished:false,
        },
        {
          detail:'小程序页面设计',
          finished:false,
        },
       ],
    },
    dairy:{
      title:'日记名称',
      content:'  '+'我的日记,难忘的一天,今天去干啥,巴拉巴拉巴拉,以下省略一万,什么鬼一万字,你在吹牛逼,所以我的日记是什么,我也不知道哈哈哈哈哈哈'
    },
    memo:{
      content:'  '+'我的便签,记录一些细小的东西巴拉巴拉巴拉巴拉巴拉'
    },
    checkIconUrl: baseUrl+'home/check.png',
    uncheckIconUrl: baseUrl+'home/uncheck.png',
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
