// subPackageOne/pages/test.js
Page({
  data: {
    width: 716,
    animationMeta:{},
    timeLength: 50
  },
  onLoad(){
    this.timeCount();
    this.startAmimation();
    console.log('开始了')
  },
  onHide(){
    this.animation.export();
    this.setData({animationMeta:{}});
    console.log('隐藏了')
  },
  onShow () {
    const currentValue = this.data.timeLength;
    this.setData({width: parseInt(currentValue*716/50)});
    wx.nextTick(() => this.startAmimation());
  },
  startAmimation(){
    const animation = wx.createAnimation({
      duration: this.data.timeLength*1000,
      timingFunction: 'linear'
    });
    this.animation = animation;
    animation.width(0).step();
    this.setData({
      animationMeta:animation.export()
    })
  },
  timeCount(){
    this.timeId = setInterval( ()=>{
      if(this.data.timeLength>0){
        this.setData({
          timeLength: this.data.timeLength-1
        });
      } else{
        clearInterval(this.timeId);
      } 
    },1000)
  }
})