//app.j
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env: 'test-3b26eb',
        traceUser: true,
      })
    };
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
      console.log(res.hasUpdate)
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
    userImg: 'https://7465-test-3b26eb-1257805982.tcb.qcloud.la/user-unlogin.png?sign=93a6002a2df1cb86265b8a0691a167f5&t=1541673411',
  }
});