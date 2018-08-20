const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {},
    onLoad: () => {
        console.log(app.globalData);
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
    }
});