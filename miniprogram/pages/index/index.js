//index.js
Page({
  data: {
    menus: [
      {
        name: '设备信息展示',
        route: '/pages/deviceInfo/deviceInfo'
      },
      {
        name: '高德sdk',
        route: '/pages/mapSDK/search/mapSearch'
      },
      {
        name: '录音播放',
        route: '/subPackageOne/pages/audio/audio'
      },
      {
        name: '控制设备',
        route: '/subPackageOne/pages/controlDevice/controlDevice'
      },
      {
        name: '轮播',
        route: '/subPackageOne/pages/banner/banner'
      },
      {
        name: '丑死了的slideBar',
        route: '/pages/sliderBar/sliderBar'
      },
      {
        name: '地图',
        route: '/pages/map/map'
      },
      {
        name: '分享示例',
        route: '/pages/share/share'
      },
      {
        name: '扫码功能',
        route: '/pages/scanCode/scanCode'
      },
      {
        name: '拍照功能',
        route: '/subPackageOne/pages/takePhoto/takePhoto'
      },
      {
        name: '表单合集',
        route: '/pages/formGroup/formGroup'
      },
      {
        name: '侧滑modal',
        route: '/pages/modalDialog/modalDialog'
      },
      {
        name: '图片预览',
        route: '/pages/bottomModal/bottomModal'
      },
      {
        name: '滑动按钮',
        route: '/subPackageOne/pages/swipeout/index'
      },
    ]
  },
  onReady: () => {
    wx.setTabBarBadge({
      index:1,
      text:'20'
    })
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },
  onLoad: function () {
    try {
      const res = wx.getStorageInfoSync()
      console.log('currentSize:', res.currentSize);
      console.log('limitSize:', res.limitSize)
    } catch (e) {
      console.error(e);
    };
    wx.getSavedFileList({
      success(res) {
        console.log('saveList:', res.fileList)
      }
    })
  }
})
