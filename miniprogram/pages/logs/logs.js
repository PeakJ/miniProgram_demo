//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [
      '分包云函数',
      'POI搜索',
      '仿微信录音按钮+播放',
      '可以查看手机的一些信息',
      '展示一些轮播大图，放在分包中，查看头像',
      '仿滴滴制打车软件的滑动菜单，并构建简单组件，返回组件',
      '高德地图常用组件展示及路线规划',
      '分享功能展示',
      '测试扫码功能，并测试了发送真实请求',
      '罗列表单组件，并实践提交按钮的formId',
      '尝试官方没有的侧滑抽屉',
      '图片预览，引入了npm的导航组件',
      'iview滑动按钮展示，并模拟进度条',
      '还有一像素边框，小程序base64处理',
      '云函数下载问文件，存储到本地',
      '增加调用部分设备api功能',
      '增加调用前置摄像头拍照功能',
      '增加小程序内关注关联公众号功能',
      '首页增加tabBar,分包预加载'
    ]
  },
  onLoad: function () {
  
  },
  onOfficialLoad(detail){
    console.log(detail)
  },
  onOfficialError(detail){
    console.log(detail)
  }
})
