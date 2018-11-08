//app.j
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env:'test-3b26eb',
        traceUser: true,
      })
    };
    
  },
  onError: error => {
    wx.showModal({
      title:'全局错误',
      content: error
    });
    const logger = wx.getLogManager();
    const time = new Date().toLocaleDateString();
    logger.warn(error,time);
  },
  globalData: {
    userInfo: null,
    userImg: 'https://7465-test-3b26eb-1257805982.tcb.qcloud.la/user-unlogin.png?sign=93a6002a2df1cb86265b8a0691a167f5&t=1541673411',
  }
});