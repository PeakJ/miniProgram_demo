
import { Base64 } from '../../../libs/base64.js';
const recorderManager = wx.getRecorderManager();
let innerAudioContext = wx.createInnerAudioContext();
let audioUrl = '';  //待播放的url
let touchPosition = null;  //滑动位置
let canPlay = false;

// console.log(Base64.encode('大佬请喝阔乐'));   // 5aSn5L2s6K+35Zad6ZiU5LmQ
// console.log(Base64.encodeURI('https://jiema.wwei.cn/static/images/jiema.jpg')); //aHR0cHM6Ly9qaWVtYS53d2VpLmNuL3N0YXRpYy9pbWFnZXMvamllbWEuanBn

// console.log(Base64.decode('5aSn5L2s6K+35Zad6ZiU5LmQ'));  // 大佬请喝阔乐
// // note .decodeURI() is unnecessary since it accepts both flavors
// console.log(Base64.decode('aHR0cHM6Ly9qaWVtYS53d2VpLmNuL3N0YXRpYy9pbWFnZXMvamllbWEuanBn'));  // https://jiema.wwei.cn/static/images/jiema.jpg

Page({
  data: {
    buttonText: '按住 说话'
  },
  onLoad: function (options) {
    canPlay = false;
    wx.getAvailableAudioSources({
      success:(res) => console.log(res.audioSources),
      fail: error => console.log(error)
    })
  },
  onUnload: function () {
    // innerAudioContext.offPlay();
    // innerAudioContext.offEnded();
    // innerAudioContext.offError();
    // innerAudioContext.destroy();
  },
  onTouchstart: function (res) {
    this.setData({
      buttonText: '松开 结束'
    });
    wx.showToast({
      title: '手指上滑，取消',
      duration: 900000
    })
    touchPosition = res.touches[0].pageY
    const option = {
      duration: 10000,
      sampleRate: 44100,
      numberOfChannels: 1,
      encodeBitRate: 192000,
      format: 'aac',
      frameSize: 50
    };
    recorderManager.start(option);
    canPlay = true;
  },
  onTouchend: function () {
    this.setData({
      buttonText: '按住 说话'
    });
    recorderManager.stop();
    wx.hideToast();
  },
  onTouchmove: function (res) {
    if (touchPosition - res.touches[0].pageY > 70) {
      this.setData({
        buttonText: '松开 取消'
      });
      wx.showToast({
        title: '松开手指，取消',
        duration: 900000
      });
      canPlay = false;
    } else {
      this.setData({
        buttonText: '松开 结束'
      });
      wx.showToast({
        title: '手指上滑，取消',
        duration: 900000
      });
      canPlay = true;
    }
  },
  play: function () {
    innerAudioContext.src = audioUrl;
    console.log('innerAudioContext:',innerAudioContext)
    innerAudioContext.obeyMuteSwitch = false;
    innerAudioContext.volume = 1;
    innerAudioContext.play();
  }
})
recorderManager.onStart(() => {
  console.log('录音开始')
});
recorderManager.onStop(res => {
  if (!canPlay) return;
  audioUrl = res.tempFilePath;
});
innerAudioContext.onPlay(() => {
  wx.showToast({
    title: '播放中。。。',
    duration: 999999,
    icon: 'none'
  })
});
innerAudioContext.onEnded(() => {
  wx.hideToast();
});
innerAudioContext.onError(res => {
  if (!res.errCode) {
    wx.showToast({
      title: '未找到播放内容',
      icon: 'none'
    })
  }else{
    wx.hideToast();
  }
  console.log('errorCode:', res.errCode);
})