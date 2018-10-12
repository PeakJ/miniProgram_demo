//app.js

App({
  onLaunch: function () {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }
  },
  onError: error => {
    console.log('全局错误：',error);
    wx.showModal({
      title:'全局错误',
      content: error
    });
    const logger = wx.getLogManager();
    const time = new Date().toLocaleDateString();
    logger.warn(error,time);
  },
  globalData: {
    userInfo: null
  }
});