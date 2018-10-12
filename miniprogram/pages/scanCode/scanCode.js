import {getQueryString} from '../../utils/util';
import {get} from '../../utils/network';
Page({

    /**
     * 页面的初始数据
     */
    data: {},
    onLoad: (options) => {
      const scene = decodeURIComponent(options.scene);
      const driverId = getQueryString(scene,'driverId');
      if(driverId){
        wx.showModal({
          title:'您的ID',
          content: driverId
        });
      }
    },
    scanCode: function () {
        wx.scanCode({
            onlyFromCamera: true,
            scanType: ['qrCode', 'barCode'],
            success: function (data) {
                if (data.scanType === 'QR_CODE') {
                    wx.showToast({
                        title: '其实我想打开，但是不会',
                        icon: 'none'
                    })
                } else {
                    wx.showToast({
                        title: '仅仅是扫了一下',
                        icon: 'none'
                    })
                }
                console.log(data);

            },
            fail: function (error) {
                console.log(error);
                wx.showToast({
                    title: error.errMsg
                })
            },
            complete: params => {
                console.log('complete:',params);
            }
        })
    },
  testRequest: () => {
    const params = {
      's':'App.Hello.World',
      'app_key':'1F8068B3FCA0D9494BC4FB52F22F70C2',
      'name': '旅行者'
    };
    get('',params,'https://hb5.api.okayapi.com/')
        .then(result => {
          console.log('success:',result);
          wx.showToast({
            title: result.data.data.title
          })
        },error => {
          wx.showToast({title:error.errMsg});
        })

  }
});