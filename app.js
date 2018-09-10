//app.js

App({
  onLaunch: function () {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);
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