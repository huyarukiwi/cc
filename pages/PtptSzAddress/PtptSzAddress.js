// pages/MyAddress/MyAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listidx: 1,
    list: [
      { name: '昊天', address: '天津市 天津市 武清区 1号楼', tel: "13796199396",      } 
    ]
    , items: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
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
      listidx: e.target.dataset.id
    })
  },
  Replate(e) {
    console.log(e)
    wx.navigateTo({
      url: '../PtptReplateAddress/PtptReplateAddress?data=' + e.currentTarget.dataset.id,
    })
  },
  paths() {
    wx.navigateTo({
      url: '../PtptCreateAddress/PtptCreateAddress'
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