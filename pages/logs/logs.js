//logs.js
Page({
  data: {
    show: true
  },
  onLoad: function () {
    this.setData({
      show: true
    })
  },
  xs() {
    this.setData({
      show: false
    })
  },
  ptxq() {
    wx.navigateTo({
      url: '../ptxq/ptxq'
    })
  }
})
