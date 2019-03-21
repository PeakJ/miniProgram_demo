// component/navigator.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '默认标题'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    content:'组件内部数据'
  },
  externalClasses: ['outer-class'],
  /**
   * 组件的方法列表
   */
  methods: {
    onBack: function () {
      const myEventDetail = { // detail对象，提供给事件监听函数
        name: 'test'
      };
      const myEventOption = {
        bubbles: false,
        composed: false,
        capturePhase: false
      };
      this.triggerEvent('myBack', myEventDetail, myEventOption);
    }
  },
  created(){
    console.log('navigator创建')
  },
  attached() {
    console.log('navigator attached') 
  },
  ready(){
    console.log('navigator布局完成')
  },
  moved(){
    console.log('navigator节点位置移动')
  },
  detached() {
    console.log('navigator组件销毁')
  },
  pageLifetimes: {
    show() {
     console.log('pageLifetimes-show')
    },
    hide() {
      console.log('pageLifetimes-hide')
    },
    resize(size) {
      console.log('pageLifetimes-resize')
    }
  },
});
