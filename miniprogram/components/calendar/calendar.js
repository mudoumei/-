// components/calendar/calendar.js
var util = require("../../utils/time-utils.js");
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
    weekdays:['日','一','二','三','四','五','六'],
    dates:[],
    selectDate:{},
    selectYearMonth:{}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeSelectDate(e){
      let _this=this;
      let date=e.currentTarget.dataset.item
      this.setData({
        selectDate:util.getDateObj(date)
      }),
      this.triggerEvent('getYearMonth',util.getDateObj(date))
      setTimeout(()=>{
        _this.closeCalender()
      },500)
      
    },
    closeCalender(){
      this.triggerEvent('hideCalendar')
    },
    prevMonth(){
      let {year,month}=this.data.selectYearMonth;
      let newdate =new Date(year,month-2,1);
      this.getDateList(newdate)
    },
    nextMonth(){
      let {year,month}=this.data.selectYearMonth;
      let newdate =new Date(year,month,1);
      this.getDateList(newdate);
    },
    getDateList(date){
      let list=util.getMonthDayList(date);
      let h=Math.ceil(list.length/7 + 2)*80 +50;
      let {year,month}=util.getDateObj(date);
      this.setData({
        dates:list,
        containerHeight:h,
        selectYearMonth:{year,month}
      })
    },
    changeList(){
      let {year,month}=this.data.selectDate;
      let newdate =new Date(year,month-1,1);
      this.getDateList(newdate);
    }
  },
  ready:function(){
      let date=new Date();
      this.getDateList(date);
      this.setData({
      selectDate:util.getDateObj(date)
    })
  }
})
