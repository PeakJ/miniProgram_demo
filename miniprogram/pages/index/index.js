//index.js

Page({
  data: {
    menus: [
      {
        name: '分包云函数',
        route: '/subPackageOne/pages/index/index'
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
        name: '设备信息展示',
        route: '/pages/deviceInfo/deviceInfo'
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
     {
        name: '更新日志',
        route: '/pages/logs/logs'
      },
    ]
  },
  onReady: () => {

  },
  onShow: function (option) {

  },
  onLoad: function (option) {

  }
})
