// pages/map/map.js
let mapCtx = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude:23.099994,
    longitude:113.324520,
    markers: [{
      iconPath: "../../images/marker.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 20,
      height: 20,
      title: '总部？',
    },
    {
      iconPath: "../../images/marker.png",
      id: 1,
      latitude: 23.102524,
      longitude: 113.329530,
      width: 20,
      height: 20
    }],
    circles: [{
      latitude: 23.099994,
      longitude: 113.324520,
      radius: 150,
      fillColor: '#b7b7ff'
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    mapCtx = wx.createMapContext('myMap');
    
  },
  controlsClicked: function(event){
    console.log('controlId:',event.controlId);
    
  },
  toCenter: function(){
    mapCtx.moveToLocation();
  },
  onRegionchange: function(event){
    return;
  },
  goToRoadPlan: function () {
    wx.navigateTo({
      url:'/pages/mapSDK/roadPlan/roadPlan'
    })
  }
});