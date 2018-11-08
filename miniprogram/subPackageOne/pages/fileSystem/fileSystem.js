
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fileId: 'cloud://test-3b26eb.7465-test-3b26eb/testData/data.js',
    savedFilePath: '/testData/data.js',
    isShow: false
  },

  fileSystemManager: wx.getFileSystemManager(),
  onLoad: function () {
    this.setData({
      savedFilePath:wx.getStorageSync('savedFilePath')
    })
  },
  start: function () {
    this.downloadFile(this.data.fileId);
  },
  downloadFile: function (fileId) {
    const vm = this;
    this.fileSystemManager.getFileInfo({
      filePath: this.data.savedFilePath,
      success: res => {
        wx.showToast({ title: '文件已经存在', icon: 'none'})
      },
      fail: error => {
        console.log('文件不存在，开始下载');
        wx.cloud.downloadFile({
          fileID: fileId, // 文件 ID
          success: res => {
            // 返回临时文件路径
            vm.saveFile(res.tempFilePath, this.data.savedFilePath);
          },
          fail: console.error
        })
      }
    })

  },
  saveFile: function (tempFilePath, filePath) {
    const vm = this;
    vm.fileSystemManager.saveFile({
      tempFilePath: tempFilePath,
      filePath: filePath,
      success: res => {
        console.log('savedFilePath:',res.savedFilePath);
        vm.setData({
          savedFilePath:res.savedFilePath
        });
        wx.setStorageSync('savedFilePath', res.savedFilePath);
      },
      fail: error => console.log(error)
    })
  },
  readFile:function(){
    const vm = this;
    vm.fileSystemManager.access({
      path:this.data.savedFilePath,
      success: res => {
        vm.fileSystemManager.readFile({
          filePath:vm.data.savedFilePath,
          success:res => {
            console.log(res.data);
            wx.request({
              url:vm.data.savedFilePath,
              success:res => {
                const arrBuff = res.data;
                wx.setStorageSync('bigData',arrBuff);
                vm.setData({
                  isShow:true
                })
              }
            })
          },
          fail:error => {
            console.log(error);
            wx.showToast({
              title:'文件不存在',
              icon: 'none'
            })
          }
        })
      },
      fail: error => console.log(error)
    })
  },
  ab2str:function (buf) {  // ArrayBuffer类型转换为字符串
    return String.fromCharCode.apply(null, new Uint16Array(buf));
  },
  str2ab:function (str) { // 字符串转换为ArrayBuffer类型
    var buf = new ArrayBuffer(str.length*2); // 2 bytes for each char
    var bufView = new Uint16Array(buf);
    for (var i=0, strLen=str.length; i<strLen; i++) {
      bufView[i] = str.charCodeAt(i);
    }
    return buf;
  }
})