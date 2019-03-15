Page({
  data: {
    clipboardData:'',
    screenBrightness: 0
  },
  onLoad:function(){
    const vm = this;
    wx.getScreenBrightness({
      success: data => {
        this.setData({
          screenBrightness: data.value*100
        })
      }
    })
  },
  getClipboard:function(){
    const vm = this;
    wx.getClipboardData({
      success:data => {
        vm.setData({
          clipboardData: data.data
        })
      },
      fail:error => console.log(error)
    })
  },
  setBrightness:function(event){
    wx.setScreenBrightness({
      value: event.detail.value,
      success:data => console.log(data),
      fail: error => console.log(error)
    });
    this.setData({
      screenBrightness: event.detail.value
    })
  },
  longVibrate:function(){
    wx.vibrateLong({
      success: data => console.log(data),
      fail: error => console.log(error)
    })
  },
  shortVibrate:function(){
    wx.vibrateShort({
      success: data => console.log(data),
      fail: error => console.log(error)
    })
  },
})