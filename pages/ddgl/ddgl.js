// pages/ddgl/ddgl.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:false,
    hideindex:0
  },
  fs(){
    this.setData({
      show:true
    })
  },
  qx(){
    this.setData({
      show: false
    })
  },
  zjps() {
    wx.navigateTo({
      url: '../zjps/zjps',
    })
  },
  dsh() {
    wx.navigateTo({
      url: '../dsh/dsh',
    })
  },
  click(e){
    this.setData({
      hideindex:e.target.dataset.id
    })
    console.log(this.data.hideindex)
  },
  dfhxq(){
    wx.navigateTo({
      url: '../dfhxq/dfhxq',
    })
  },
  kdps(){
    wx.navigateTo({
      url: '../kdps/kdps',
    })
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