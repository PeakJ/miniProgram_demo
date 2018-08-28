const AMap = require('../../../libs/amap-wx.js');
import CONSTANT from '../../../utils/constant';

Page({
  data: {
    tips: {}
  },
  onLoad: function(){

  },
  bindInput: function(e){
    const that = this;
    const keywords = e.detail.value;
    const myAMapFun = new AMap.AMapWX({key: CONSTANT.AMP_KEY});
    myAMapFun.getInputtips({
      keywords: keywords,
      location: '',
      success: function(data){
        if(data && data.tips){
          that.setData({
            tips: data.tips
          });
        }

      }
    })
  },
  bindSearch: function(e){
    const keywords = e.target.dataset.inputinfo.name;
    const location = e.target.dataset.inputinfo.location;
    const url = `../getPOI/getPOI?keywords=${keywords}&location=${location}`;
    wx.navigateTo({
      url: url
    })
  }
});