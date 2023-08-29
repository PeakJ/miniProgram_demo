//app.j
App({
  onLaunch: function () {
    this.checkoutVersion();
  },
  onError: error => {
    wx.showModal({
      title: '全局错误',
      content: error
    });
    const logger = wx.getLogManager();
    const time = new Date().toLocaleDateString();
    logger.warn(error, time);
  },
  checkoutVersion: function () {
    const updateManager = wx.getUpdateManager()

    updateManager.onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
    })

    updateManager.onUpdateReady(function () {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success: function (res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate();
          }
        }
      })
    })

    updateManager.onUpdateFailed(function () {
      // 新版本下载失败
    })
  },
  globalData: {
    userInfo: null,
    userImg: 'https://s1.ax1x.com/2022/03/07/byxz3F.md.jpg',
  }
});