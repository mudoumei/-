// pages/billAdd/billAdd.js
var util = require("../../utils/time-utils.js");
const baseUrl = getApp().globalData.baseUrl + 'billIcon/';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 'expanse',
    select: '',
    inputMoney: '0.00',
    currentList:[],
    incomeList: [
      {
        type: '工资',
        iconUrl: baseUrl + 'salary.png',
        id:'salary'
      },
      {
        type: '兼职',
        iconUrl: baseUrl + 'part_time_job.png',
        id:'part_time_job'

      },
      {
        type: '投资',
        iconUrl: baseUrl + 'investment.png',
        id:'investment'
      },
      {
        type: '红包',
        iconUrl: baseUrl + 'red_packet.png',
        id:'red_packet'

      },
      {
        type: '零花钱',
        iconUrl: baseUrl + 'pocket_money.png',
        id:'pocket_money'
      },
      {
        type: '奖金',
        iconUrl: baseUrl + 'winning.png',
        id:'winning'
      },
      {
        type: '其他',
        iconUrl: baseUrl + 'other.png',
        id:'other'
      },
    ],
    expanseList:[
      {
        type: '餐饮',
        iconUrl: baseUrl + 'catering.png',
        id:'catering'

      },
      {
        type: '衣服',
        iconUrl: baseUrl + 'clothes.png',
        id:'clothes'
      },
      {
        type: '交通',
        iconUrl: baseUrl + 'traffic.png',
        id:'traffic'
      },
      {
        type: '通讯',
        iconUrl: baseUrl + 'telephone_charge.png',
        id:'telephone_charge'
      },
      {
        type: '化妆品',
        iconUrl: baseUrl + 'makeup.png',
        id:'makeup'
      },
      {
        type: '饰品',
        iconUrl: baseUrl + 'accessories.png',
        id:'accessories'
      },
      {
        type: '聚餐',
        iconUrl: baseUrl + 'dine together.png',
        id:'dine_together'
      },
      {
        type: '娱乐',
        iconUrl: baseUrl + 'entertainment.png',
        id:'entertainment'
      },
      {
        type: '学习',
        iconUrl: baseUrl + 'study.png',
        id:'study'
      },
      {
        type: '零食',
        iconUrl: baseUrl + 'snacks.png',
        id:'snacks'
      },
      {
        type: '宠物',
        iconUrl: baseUrl + 'pet.png',
        id:'pet'
      },
      {
        type: '保健',
        iconUrl: baseUrl + 'medicine.png',
        id:'medicine'
      },
      {
        type: '日用品',
        iconUrl: baseUrl + 'commodity.png',
        id:'commodity'
      },
      {
        type: '居家',
        iconUrl: baseUrl + 'furniture.png',
        id:'investment'
      },
      {
        type: '礼物',
        iconUrl: baseUrl + 'present.png',
        id:'present'
      },
      {
        type: '社交',
        iconUrl: baseUrl + 'social_contact.png',
        id:'social_contact'
      },
      {
        type: '房租',
        iconUrl: baseUrl + 'houserent.png',
        id:'houserent'
      },
      {
        type: '水电费',
        iconUrl: baseUrl + 'water_and_electricity.png',
        id:'water_and_electricity'
      },
      {
        type: '旅行',
        iconUrl: baseUrl + 'tour.png',
        id:'tour'
      },
      {
        type: '其他',
        iconUrl: baseUrl + 'other.png',
        id:'other'
      }
    ],
    state1:'',
    state2:'',
    current:0,
    showCategory:false,
    showCalendar:false,
    inputMoney:'',
    yearList:[],
    dayList:[],
    currentL:7,
    currentC:0,
    currentR:0,
    selectDay:0,
    selectMonth:0,
    selectYear:10,
    curDate:{},
    msg:''
  },
  scrollMonth(m){
    return m<0 ? 12+m : m
  },
  dayChange(e){
    let select=e.detail.current+3
    this.setData({
      selectDay:select
    })
  },
  monthChange(e){
    let select=e.detail.current+3;
    select=select>11 ? select-12:select;
    this.setData({
      selectMonth:select
    })
    this.changeDayList();
  },
  yearChange(e){
    if(e.detail.current==0){
      let list=this.data.yearList;
      for(let i=1;i<11;i++){
         list.unshift(list[0]-i);
      }
      this.setData({
        yearList:list,
        currentL:e.detail.current+10
      })
    }
    if(e.detail.current==this.data.yearList.length-7){
      let list=this.data.yearList;
      for(let i=1;i<11;i++){
        list.push(list[this.data.yearList.length-1]+i);
      }
      this.setData({
        yearList:list
      })
    }
    let select=e.detail.current+3;
    this.setData({
      selectYear:select
    })
    this.changeDayList();
  },
  changeDayList(){
    let year=this.data.yearList[this.data.selectYear];
    let month=this.data.selectMonth;
    console.log(year,month);
    let time=new Date(year,month,1)
    let dlist=util.getCurMonthDayList(time);
    this.setData({
      dayList:dlist
    })
  },
  formatValue(e) {
    let value=e.detail.value
    let num = value.toString(); //先转换成字符串类型
    if (num.indexOf('.') == 0) { //第一位就是 .
      num = '0' + num
    }
    num = num.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");//只保留第一个. 清除多余的
    num = num.replace(/^(\-)*(\d+)\.(\d\d).*$/, '$1$2.$3'); //只能输入两个小数
    if (num != "") {
      num = parseFloat(num).toFixed(2);
    }
    this.setData({
      inputMoney: num
    })
    console.log(num);
  },
  closeList(){
    let _this=this;
    if(this.data.select=='category'){
      setTimeout(()=>{
      _this.setData({
        showCategory:false
      })
    },500)
     this.setData({
      select: '',
      state1:'hide',
    
    }) 
    }else{
      setTimeout(()=>{
        _this.setData({
          showCalendar:false
        })
      },500)
      this.setData({
        select: '',
        state2:'hide',
        currentL:this.data.selectYear-3,
        currentC:this.data.selectMonth-3,
        currentR:this.data.selectDay-3,
      }) 
    }
   
  },
  isExpanse() {
    this.setData({
      active: 'expanse',
      current:0,
      selectItem:this.data.expanseList[0].type,
      currentList:this.data.expanseList
    })

  },
  isIncome() {
    this.setData({
      active: 'income',
      current:0,
      selectItem:this.data.incomeList[0].type,
      currentList:this.data.incomeList
    })
  },
  categoryChange(e){
    let i=e.detail.current;
      this.setData({
        current:i,
        selectItem : this.data.currentList[i].type
    })
  },
  changeSelect(e) {
    let select = e.target.dataset.select;
    if(select == 'category'){
      this.setData({
        select: select,
        state1:'show',
        showCategory:true,
        showCalendar:false,
        state2:'hide'
      })
      return ;
    }
    if(select == 'date'){
      this.setData({
        select: select,
        state2:'show',
        showCalendar:true,
        showCategory:false,
        state1:'hide'
      })
      return ;
    }
    if(select !== 'category'||select !== 'date'){
      this.setData({
        select: '',
        state2:'hide',
        showCalendar:false,
        showCategory:false,
        state1:'hide'
      })
      return ;
    }
  },
  saveMsg(e){
    this.setData({
      msg:e.detail.value
    })
    console.log(e.detail.value);
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
    let time=new Date();
    let {year,month,date}=util.getDateObj(time);
    let dlist=util.getCurMonthDayList(time);
    let ylist=[];
    let m=this.scrollMonth(month-4);
    for(let i=0;i<=20;i++){
      ylist.unshift(year+10-i)
    }
    this.setData({
      currentList:this.data.expanseList,
      selectItem:this.data.expanseList[0].type,
      currentR:date-4,
      selectDay:date-1,
      currentC:m,
      selectMonth:m+3>11 ? m+3-12 : m+3,
      dayList:dlist,
      yearList:ylist
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