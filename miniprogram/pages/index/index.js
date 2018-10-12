//index.js

Page({
  data: {
    menus: [
      {
        name: '轮播',
        route: '/pages/banner/banner'
      }, 
      {
        name: '滑动菜单',
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
        name: '设备信息展示',
        route: '/pages/deviceInfo/deviceInfo'
      },
      {
        name: '高德sdk',
        route: '/pages/mapSDK/search/mapSearch'
      },
      {
        name: '表单合集',
        route: '/pages/formGroup/formGroup'
      },
      {
        name: '侧滑菜单',
        route: '/pages/modalDialog/modalDialog'
      },
      {
        name: '图片预览',
        route: '/pages/bottomModal/bottomModal'
      },
      {
        name: '分包云函数',
        route: '/subPackageOne/pages/index/index'
      },{
        name: 'log',
        route: '/pages/logs/logs'
      },
      {
        name: '音频相关',
        route: '/subPackageOne/pages/audio/audio'
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