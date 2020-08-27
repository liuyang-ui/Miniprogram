//注册一个小程序
const app=getApp()
const name = app.globalData.name
const age=app.globalData.age
Page({
  data:{
    name:'coderwhy',
    age:'18',
    students:[
      {id:110,name:"kobe",age:34},
      {id:111,name:"kwhy",age:32},
      {id:111,name:"jan",age:30},
      {id:111,name:"kangkang",age:20}
    ],
    counter:0
  },
  getUserInfo(event){
    console.log(event)
  },
  handBtnClick(){
  //  this.data.counter++
  //  console.log(this.data.counter)
  this.setData({
    counter:this.data.counter+=1
  })
  },
handBtnSubtraction(){
  console.log(this)
  this.setData({
    counter:this.data.counter-=1
  })
  }
})