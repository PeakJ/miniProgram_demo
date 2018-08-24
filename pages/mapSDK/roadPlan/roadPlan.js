const AMap = require('../../../libs/amap-wx.js');
const CONSTANT = require('../../../utils/constant.js');
let myAmapFun = new AMap.AMapWX({key: CONSTANT.AMP_KEY});
Page({
  data: {
    markers: [{
      iconPath: "../../../image/marker.jpg",
      id: 0,
      latitude: 39.989643,
      longitude: 116.481028,
      width: 23,
      height: 33
    }, {
      iconPath: "../../../image/marker.jpg",
      id: 0,
      latitude: 39.90816,
      longitude: 116.434446,
      width: 24,
      height: 34
    }],
    distance: '',
    cost: '',
    polyline: []
  },
  onLoad: function () {
    this.goToCar();
  },
  goToCar: function (e) {
    const that = this;
    myAmapFun.getDrivingRoute({
      origin: '116.481028,39.989643',
      destination: '116.434446,39.90816',
      success: function (data) {
        const points = [];
        if (data.paths && data.paths[0] && data.paths[0].steps) {
          const steps = data.paths[0].steps;
          for (let i = 0; i < steps.length; i++) {
            const poLen = steps[i].polyline.split(';');
            for (let j = 0; j < poLen.length; j++) {
              points.push({
                longitude: parseFloat(poLen[j].split(',')[0]),
                latitude: parseFloat(poLen[j].split(',')[1])
              })
            }
          }
        }
        that.setData({
          polyline: [{
            points: points,
            color: "#0091ff",
            width: 6
          }]
        });
        if (data.paths[0] && data.paths[0].distance) {
          that.setData({
            distance: data.paths[0].distance + '米'
          });
        }
        if (data.taxi_cost) {
          that.setData({
            cost: '打车约' + parseInt(data.taxi_cost) + '元'
          });
        }

      },
      fail: function (info) {

      }
    })
  },
  goToBus: function (e) {
    const that = this;
    console.log('公交');
  },
  goToRide: function (e) {
    console.log('骑行');
  },
  goToWalk: function (e) {
    const that = this;
    myAmapFun.getWalkingRoute({
      origin: '116.481028,39.989643',
      destination: '116.434446,39.90816',
      success: function (data) {
        const points = [];
        if (data.paths && data.paths[0] && data.paths[0].steps) {
          const steps = data.paths[0].steps;
          for (let i = 0; i < steps.length; i++) {
            const poLen = steps[i].polyline.split(';');
            for (let j = 0; j < poLen.length; j++) {
              points.push({
                longitude: parseFloat(poLen[j].split(',')[0]),
                latitude: parseFloat(poLen[j].split(',')[1])
              })
            }
          }
        }
        that.setData({
          polyline: [{
            points: points,
            color: "#0091ff",
            width: 6
          }]
        });
        if (data.paths[0] && data.paths[0].distance) {
          that.setData({
            distance: data.paths[0].distance + '米'
          });
        }

      },
      fail: function (info) {

      }
    })
  }
});