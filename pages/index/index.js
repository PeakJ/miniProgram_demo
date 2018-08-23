//index.js

Page({
  data: {
    menus: [
      {
        name: '轮播',
        route: '/pages/banner/banner'
      }, {
        name: 'log',
        route: '/pages/logs/logs'
      }, {
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
      }
    ]
  },
  onReady: () => {

  },
  onShow: function (option) {

  },
  onLoad: function (option) {

  }
})
