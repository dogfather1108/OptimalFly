// pages/index/login/index.js
var timer;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    IsGetIdenf:false,
    count:60,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  // 获取验证码
  getIdenf:function(){
    if (timer) {
      return;
    }
    this.setData({
      IsGetIdenf:true
    })
    timer = setInterval(() => {
      this.data.count--
      this.setData({
        count: this.data.count
      })
      if (this.data.count == 0) {
        clearInterval(timer)
        timer = '';
        this.setData({
          IsGetIdenf: false
        })
      }
    }, 1000)
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
  
})