// pages/deviceInfo/deviceInfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    deviceInfo:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const vm = this;
    wx.getSystemInfo({
      success: res => {
        console.log(res);
        delete res.errMsg;
        delete res.safeArea;
        vm.setData({
          deviceInfo:res
        })
      },
      fail: error => {
        console.log(error);
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('本次渲染了');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },


});