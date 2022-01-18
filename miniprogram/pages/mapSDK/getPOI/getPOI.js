const AMap = require('../../../libs/amap-wx.js');
import CONSTANT from '../../../utils/constant';

let markersData = [];
Page({
  data: {
    markers: [],
    latitude: '41.2866870000',
    longitude: '114.7671000000',
    textData: {}
  },
  makertap: function(e) {
    const id = e.markerId;
    const that = this;
    that.showMarkerInfo(markersData,id);
    that.changeMarkerColor(markersData,id);
  },
  onLoad: function(options) {
    const that = this;
    const myAMapFun = new AMap.AMapWX({key:CONSTANT.AMP_KEY});
    const params = {
      iconPathSelected: '../../../images/marker_on.png',
      iconPath: '../../../images/marker_off.png',
      success: function(data){
        markersData = data.markers;
        that.setData({
          markers: markersData
        });
        that.setData({
          latitude: markersData[0].latitude
        });
        that.setData({
          longitude: markersData[0].longitude
        });
        that.showMarkerInfo(markersData,0);
      },
      fail: function(info){
        wx.showModal({
          title:info.errMsg
        })
      }
    };
    // 22
    myAMapFun.getRegeo({
      success: function(data){
        console.log('getRegeo:',data);
      },
      fail: function(info){
        //失败回调
        console.log(info)
      }
    });

    if(options && options.keywords){
      params.querykeywords = options.keywords;
      params.location = options.location;
    }
    myAMapFun.getPoiAround(params);
  },
  showMarkerInfo: function(data,i){
    const that = this;
    that.setData({
      textData: {
        name: data[i].name,
        desc: data[i].address
      }
    });
  },
  changeMarkerColor: function(data,i){
    const that = this;
    const markers = [];
    for(let j = 0; j < data.length; j++){
      if(j===i){
        data[j].iconPath = '../../../images/marker_on.jpg';
      }else{
        data[j].iconPath = '../../../images/marker_off.jpg';
      }
      markers.push(data[j]);
    }
    that.setData({
      markers: markers
    });
  }

});