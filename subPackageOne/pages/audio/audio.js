const recorderManager = wx.getRecorderManager();
const innerAudioContext = wx.createInnerAudioContext();
let audioUrl = '';  //待播放的url
let touchPosition = null;  //滑动位置
Page({
  data:{
    buttonText: '按住 说话'
  },
  onLoad:function (options) {
    console.log(innerAudioContext)
  },
  onTouchstart:function(res){
    this.setData({
      buttonText: '松开 结束'
    });
    touchPosition = res.touches[0].pageY
    recorderManager.start({
      duration: 10000,
      sampleRate: 44100,
      numberOfChannels: 1,
      encodeBitRate: 192000,
      format: 'aac',
      frameSize: 50
    });
  },
  onTouchend:function(){
    this.setData({
      buttonText: '按住 说话'
    });
    recorderManager.stop();
  },
  onTouchmove:function (res) {
    if(touchPosition-res.touches[0].pageY>70){
      this.setData({
        buttonText: '松开 取消'
      })
    }else{
      this.setData({
        buttonText: '松开 结束'
      })
    }
  },
  play:function(){
    innerAudioContext.src = audioUrl;
    innerAudioContext.play();
  }
})
recorderManager.onStart(() => {
  console.log('录音开始')
});
recorderManager.onStop(res =>{
  console.log('path:',res.tempFilePath);
  audioUrl = res.tempFilePath;
});
innerAudioContext.onPlay(() => {
  console.log('play')
});
innerAudioContext.onError(res => {
  console.log('errorCode:',res.errCode);
  if(!res.errCode){
    wx.showToast({
      title:'请先录音',
      icon: 'none'
    })
  }
})