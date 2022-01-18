// pages/banner/banner.js
//获取应用实例
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    motto: '试一试',
    avatarUrl: 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0',
    hasAvatarUrl: false,
    imageData: [
      { url: '../../images/1.jpg' },
      { url: '../../images/2.jpg' },
      { url: '../../images/3.jpg' },
      { url: '../../images/4.jpg' },
      { url: '../../images/5.jpg' },
      { url: '../../images/6.jpg' },
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    if (app.globalData.userAvatar) {
      this.setData({
        avatarUrl: app.globalData.userAvatar,
        hasAvatarUrl: true,
        myRouter: this.route
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#ff0000',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
  },
  onChooseAvatar: function (e) {
    const { avatarUrl } = e.detail 
    app.globalData.avatarUrl = avatarUrl
    this.setData({
      avatarUrl: avatarUrl,
      hasAvatarUrl: true,
      myRouter: this.route
    })
  }
})