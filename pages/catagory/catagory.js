// pages/catagory/catagory.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:"哈哈哈",
    list:[]
  },
  handBtnClick(){
    this.setData({
      message:this.data.message
    })
  },
  onPageScroll(options)
  {
    console.log(options)
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log('1'),
      wx.request({
        url:"http://www.baidu.com",
        success:(res)=>{
          console.log(res)
         this.setData({
           list:res.cookies
         })
        }
      })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('2')
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
    console.log('4')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('5')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('6')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('7')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('8')
  }
})