Page({

  /**
   * 页面的初始数据
   */
  data: {
    nav_list: ['前端大全', '简书', 'CSDN','微信小程序'],
    open: false,
    indicatorDots: true,//是否显示面板指示点
    autoplay: true,//是否开启自动切换
    interval: 3000,//自动切换时间间隔
    duration: 500//滑动动画时长
  },
  //列表的操作函数
  open_list: function(){
    //此处进行操作
    this.setData({
      open: false
    });
  },
  //左侧导航的开关函数
  offCanvas: function(){
    if(this.data.open){
      this.setData({
        open: false
      });
    }else{
      this.setData({
        open: true
      });
    }
  }
});