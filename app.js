App({
  // 生命周期函数
  //创建初始化，在关闭小程序后两个小时左右会被杀死
  onLaunch:function(options){
    // console.log('+++')
        console.log(options)
    // setTimeout(() => {
    //     const err=new err()
    //     throw err
    // }, 3000);
  },
  //小程序界面显示出来后执行的生命周期函数
  onShow:function(options){
      // console.log("------")
      console.log(options)
      //获取用户信息，并将获取到的信息传递给服务器
      // wx.getUserInfo({
      //   success:function(res){
      //     console.log(res)
      //   }
      // })
  },
  onHide:function(){
      console.log("????")
  },
  onError:function(){
      console.log("程序出现错误了")
  },
  globalData:{
    name:'yangliu',
    age:26
  }
})