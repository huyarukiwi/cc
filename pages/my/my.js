// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  hpt(){
    wx.navigateTo({
      url: '../huipintuan/huipintuan',
    })
  },
  ddgl(){
    wx.navigateTo({
      url: '../ddgl/ddgl',
    })
  },
  group() {
    wx.navigateTo({
      url: '../group/group',
    })
  },
  wfdt(){
    wx.navigateTo({
      url: '../wfdt/wfdt',
    })
  },
  main() {
    wx.navigateTo({
      url: '../MyMain/MyMain',
    })
  },
  install(){
    wx.navigateTo({
      url: '../install/install',
    })
  },
  income() {
    wx.navigateTo({
      url: '../income/income',
    })
  },
  det() {
    wx.navigateTo({
      url: '../detailed/detailed',
    })
  },
  address() {
    wx.navigateTo({
      url: '../address/address',
    })
  },
  follow(){
    wx.navigateTo({
      url: '../follow/follow',
    })
  },
  per() {
    wx.navigateTo({
      url: '../personal/personal',
    })
  },
  order() {
    wx.navigateTo({
      url: '../MyOrder/MyOrder',
    })
  },
  fans() {
    wx.navigateTo({
      url: '../fans/fans',
    })
  },
  lifting() {
    wx.navigateTo({
      url: '../lifting/lifting',
    })
  },
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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