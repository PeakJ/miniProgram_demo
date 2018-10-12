Page({

    /**
     * 页面的初始数据
     */
    data: {},

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },


    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
        return {
            title: '测试小程序分享',
            imageUrl: '../../images/Google.png',
            path: '/pages/banner/banner'
        }
    },
    showShareMenu: function () {
        wx.showShareMenu({
            success: function (data) {
                console.log(data);
            },
            fail: function (error) {
                console.log(error);
            }
        })
    },
    updateShareMenu: function () {
        wx.updateShareMenu({
            success: function (data) {
                console.log(data);
            },
            fail: function (error) {
                console.log(error);
            }
        })
    },
    hideShareMenu: function () {
        wx.hideShareMenu({
            success: function (data) {
                console.log(data);
            },
            fail: function (error) {
                console.log(error);
            }
        })
    }
});