// pages/sliderBar/sliderbar.js
let itemWidth = null;//滚动选项宽度
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentId: 'item0',
    scrollPosition: 0,
    sliderMenu: [
      {
        text: 'item0',
        value: 0
      }, {
        text: 'item1',
        value: 1
      }, {
        text: 'item2',
        value: 2
      },
      {
        text: 'item3',
        value: 3
      },
      {
        text: 'item4',
        value: 4
      },
      {
        text: 'item5',
        value: 5
      }, {
        text: 'item6',
        value: 6
      }
    ]
  },
  itemClick: function (event) {
    const params = event.currentTarget.dataset;
    const tempMenu = [];
    this.data.sliderMenu.forEach((element, index) => {
      element.textColor = params.item.value == index ? '#f00' : '#000';
      tempMenu.push(element);
    });
    const shouldScroll = event.currentTarget.offsetLeft - itemWidth;// 调整位置到中间位置
    this.setData({
      currentId: params.item.text,
      sliderMenu: tempMenu,
      scrollPosition: shouldScroll
    });
  },
onReady:function(){
  wx.createSelectorQuery().select('.slider-item').boundingClientRect(function(rect){
   itemWidth = rect.width;
  }).exec();
},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // const exSliderMenu = this.data.sliderMenu.map((value, index) => {
    //   return Object.assign({}, value, { textColor: '#000' })
    // });
    // this.setData({
    //   sliderMenu: exSliderMenu
    // })
  },


})