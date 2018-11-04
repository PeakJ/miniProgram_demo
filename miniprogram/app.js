//app.js
import {priceConfigData} from './common/data.js';
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    };
    // for(let i=0;i<30;i++){
    //   wx.setStorage({
    //     key:'testData'+ i,
    //     data:priceConfigData
    //   })
    // }
    
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
    userInfo: null
  }
});