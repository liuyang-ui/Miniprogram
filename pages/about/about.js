// pages/about/about.js
//注册一个页面
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      consolelog("1")
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    consolelog("2")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    consolelog("3")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    consolelog("4")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    consolelog("4")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    consolelog("5")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    consolelog("6")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    consolelog("7")
  }
})