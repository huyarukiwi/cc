// pages/CtPay/CtPay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    agreement:[
      {
        txt:'我信任该团长',
        uid:1
      }
    ],
    hideBg:false,
    hidePay:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  showPayBtn(){
    this.setData({
      hideBg: true,
      hidePay: true
    })
  },
  hidePayBtn(){
    this.setData({
      hideBg: false,
      hidePay: false
    })
  },
  PtptSzAddress(){
    wx.navigateTo({
      url: '../PtptSzAddress/PtptSzAddress'
    })
  },
  radio: function (e) {
    this.setData({
      guige_key02: e.currentTarget.dataset.id
    })
    console.log(e.currentTarget.dataset.id)
  },
  // 发货地址选择,获取用户选择的单选框的值
  radioChange: function (e) {
    this.setData({
      arr_guige02: e.detail.value
    })
    console.log(e.detail.value)
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