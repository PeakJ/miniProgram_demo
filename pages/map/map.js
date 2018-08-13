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
      iconPath: "../../image/Google.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 20,
      height: 20,
      title: '总部？',
      callout: {
        content: '气泡',
        display: 'ALWAYS',
        bgColor:'#0f0',
        padding: 2,
        borderRadius: 5
      },
      label: {
        content: '标签',
        color: '#f00'
      }
    },
    {
      iconPath: "../../image/bloodEye.jpg",
      id: 1,
      latitude: 23.102524,
      longitude: 113.329530,
      width: 20,
      height: 20
    }],
    circles: [{
      latitude: 23.099994,
      longitude: 113.324520,
      radius: 500,
      fillColor: '#000000AA'
    }],
    controls: [{
      id: 1,
      iconPath: '../../image/bloodEye.jpg',
      position: {
        left: 50,
        top: 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
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
    
    const that = this;
    mapCtx.getCenterLocation({
      success: function(result){
        // markers 和 circles跟随地图移动到中心
        let markers = that.data.markers;
        let circles = that.data.circles;
        markers[0].longitude = result.longitude;
        circles[0].longitude = result.longitude;
        markers[0].latitude = result.latitude;
        circles[0].latitude = result.latitude;
        that.setData({
        markers:markers,
        circles:circles
        });

    // 移动makers到指定位置，带动画，无法取消？？
        // mapCtx.translateMarker({
        //   markerId: 0,
        //   autoRotate: true,
        //   duration: 1000,
        //   destination: {
        //     latitude:result.latitude,
        //     longitude:result.longitude,
        //   },
        //   animationEnd() {
        //     console.log('animation end')
        //   }
        // })
      },
      fail: function(error){
        console.log('fail:',error)
      }
    });
  }
})