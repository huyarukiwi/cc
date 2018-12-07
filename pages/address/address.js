// pages/MyAddress/MyAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listidx:1,
    list: [
      { name: '昊天', address: '天津市 天津市 武清区 1号楼', tel: "13796199396",},
      { name: '昊天', address: '天津市 天津市 武清区 1号楼', tel: "13796199396"  }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  radioChange: function (e) {
    console.log(e)
    this.setData({
      listidx:e.target.dataset.id
    })
  },
  add(){
    wx.navigateTo({
      url: '../caddress/caddress',
    })
  },
  raddress(){
    wx.navigateTo({
      url: '../raddress/raddress',
    })
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