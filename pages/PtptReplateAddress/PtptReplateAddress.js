// pages/CreateAddress/CreateAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    kg: "#333;",
    region: ['天津市','天津市','武清区'],
    customItem: '全部',
    username: "天鹅湖",
    useraddress: "5号楼 1501",
    usertel: "13796199396"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  PtptSzAddress() {
    wx.navigateTo({
      url: '../PtptSzAddress/PtptSzAddress'
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  useraddress(e){
    this.setData({
      useraddress: e.detail.value
    })
  },
  username(e) {
    this.setData({
      username: e.detail.value
    })
  },
  usertel(e) {
    this.setData({
      usertel: e.detail.value
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