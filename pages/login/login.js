// pages/login/login.js
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
 // 登录
 wx.login({
  success: res => {
    // 发送 res.code 到后台换取 openId, sessionKey, unionId
    console.log("---------")
    console.log(res.code)

    // if (res.code) {
    //   //发起网络请求
    //   wx.request({
    //     url: 'https://example.com/onLogin',
    //     data: {
    //       code: res.code
    //     }
    //   })
    // } else {
    //   console.log('登录失败！' + res.errMsg)
    // }

  }
})
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