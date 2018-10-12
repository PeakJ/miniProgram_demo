/**
 * 封装微信 request 请求方法
 * @param  {String} url            请求URL地址
 * @param  {Object} [data={}]      请求的参数
 * @param  {String} [method='GET'] 默认为 GET，有效值：OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
 * @param  {Object} [header={}]    设置请求的 header
 * @param  {Function} complete     接口调用结束的回调函数（调用成功、失败都会执行）
 * @param  {Boolean} loading       是否需要显示loading弹层，默认为true
 * @param  {String} loadingText    loading弹层文案，默认为空
 * @return {Object}                request Promise
 */
export function fetch({
  url,
  data = {},
  method = 'GET',
  header = {},
  complete,
  // loading = true,
  // loadingText = ''
}) {
  const app = getApp()

  // 设置 header
  if (method === 'POST') {
    if (!header['content-type']) header['content-type'] = 'application/x-www-form-urlencoded'
  }
  // 过滤data里的null和undefined
  for (let key in data) {
    if (data[key] === null || data[key] === undefined) {
      data[key] = ''
    }
  }

  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: data,
      method: method,
      header: header,
      dataType: 'json',
      success: (res) => {
        if (res.errno) {
          reject({
            errno: res.errno
          })
        } else {
          resolve(res)
        }
      },
      fail: reject,
      complete: () => {
        complete && complete()
      }
    })
  })
}

/**
 * 微信显示 loading 接口
 * @param  {Object} options toast参数
 * @return {Promise}        promise
 */
export function showLoading(title = '加载中') {
  return new Promise((resolve, reject) => {
    if (typeof wx.showLoading === 'function') {
      wx.showLoading({
        title: title,
        mask: true,
        success: resolve,
        fail: reject
      })
    } else {
      wx.showToast({
        title: title,
        icon: 'loading',
        duration: 10000,
        mask: true,
        success: resolve,
        fail: reject
      })
    }
  })
}

/**
 * 微信隐藏 loading 接口
 */
export function hideLoading() {
  if (typeof wx.hideLoading === 'function') {
    wx.hideLoading()
  } else {
    wx.hideToast()
  }
}


/**
 * 封装微信api
 * @param {WXApis} api 微信提供的异步原生api
 * @param {Object} data api需要的数据
 */
export function wxApi(api, data, complete) {
  let _data = data || {};
  return new Promise((res, rej) => {
    console.log(_data)
    _data.success = (data) => {
      res(data)
    };
    _data.fail = (e) => {
      console.log('微信api请求错误', e)
    }
    if (typeof complete === 'function') {
      _data.complete = () => {
        complete()
      }
    }else if(complete){
      console.error('wxApi 第三个参数必须为函数(非必填)')
    }
    //执行微信方法
    api(_data);
  })
}