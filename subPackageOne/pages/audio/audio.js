// subPackageOne/pages/audio/audio.js
Page({
  data:{
    buttonText: '按住 说话',
    touchPosition:null
  },
  onTouchstart:function(res){
    this.setData({
      buttonText: '松开 结束',
      touchPosition:res.touches[0].pageY
    })
  },
  onTouchend:function(){
    this.setData({
      buttonText: '按住 说话'
    })
  },
  onTouchmove:function (res) {
    if(this.data.touchPosition-res.touches[0].pageY>70){
      this.setData({
        buttonText: '松开 取消'
      })
    }else{
      this.setData({
        buttonText: '松开 结束'
      })
    }
  }
})