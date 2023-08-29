Page({
  data: {
    logs: [
      { desc: '分包云函数', isExpired: true },
      { desc: 'POI搜索', isExpired: false },
      { desc: '仿微信录音按钮+播放', isExpired: false },
      { desc: '可以查看手机的一些信息', isExpired: false },
      { desc: '展示一些轮播大图，放在分包中，查看头像', isExpired: false },
      { desc: '仿滴滴制打车软件的滑动菜单，并构建简单组件，返回组件', isExpired: false },
      { desc: '高德地图常用组件展示及路线规划', isExpired: false },
      { desc: '分享功能展示', isExpired: false },
      { desc: '测试扫码功能，并测试了发送真实请求', isExpired: false },
      { desc: '罗列表单组件，并实践提交按钮的formId', isExpired: false },
      { desc: '尝试官方没有的侧滑抽屉', isExpired: false },
      { desc: '图片预览，引入了npm的导航组件', isExpired: false },
      { desc: 'iview滑动按钮展示，并模拟进度条', isExpired: false },
      { desc: '还有一像素边框，小程序base64处理', isExpired: false },
      { desc: '云函数下载问文件，存储到本地', isExpired: true },
      { desc: '增加调用部分设备api功能', isExpired: false },
      { desc: '增加调用前置摄像头拍照功能', isExpired: false },
      { desc: '增加小程序内关注关联公众号功能', isExpired: false },
      { desc: '首页增加tabBar,分包预加载', isExpired: false },
      { desc: '小程序中引入字体图标（base64背景）', isExpired: false },
      { desc: '移除云函数相关功能', isExpired: false }
    ]
  },
  onShow: function () {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
  },
  onOfficialLoad(detail){
    console.log(detail)
  },
  onOfficialError(detail){
    console.log(detail)
  }
})
