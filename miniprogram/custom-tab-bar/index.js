Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
      pagePath: "/pages/index/index",
      iconPath: "/images/icon_component.png",
      selectedIconPath: "/images/icon_component_HL.png",
      text: "首页"
    }, {
      pagePath: "/pages/logs/logs",
      iconPath: "/images/icon_API.png",
      selectedIconPath: "/images/icon_API_HL.png",
      text: "日志"
    }]
  },
  created(){
    console.log('全局tabBar创建')
  },
  attached() {
   console.log('全局tabBar 挂载')
  },
  ready(){
    console.log('全局tabBar布局完成')
  },
  moved(){
    console.log('全局tabBar节点位置移动')
  },
  detached() {
    console.log('全局tabBar组件销毁')
  },
  // 全局组件中pageLifetimes生命中期函数不会执行
  pageLifetimes: {
    show() {
     console.log('show')
    },
    hide() {
      console.log('hide')
    },
    resize(size) {
      console.log('resize')
    }
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url:url})
      this.setData({
        selected: data.index
      })
    }
  }
})