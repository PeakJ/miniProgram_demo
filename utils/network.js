const BASE_URL = 'https://ycagent.yongche.com';

//添加finally：因为还有一个参数里面还有一个complete方法。
Promise.prototype.finally = function (callback) {
  let P = this.constructor;
  return this.then(
    value => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason })
  );
};

//封装异步api
const wxPromisify = fn => {
  return function (obj = {}) {
    return new Promise((resolve, reject) => {
      obj.success = function (res) {
        resolve(res)
      }

      obj.fail = function (res) {
        reject(res)
      }

      fn(obj)
    })
  }
}

const get = (url, data, baseUrl = BASE_URL) => {
  const promise = new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + url,
      data: data,
      header: {
        'content-type': 'application/json; charset=UTF-8',
        // 'token': wx.getStorageSync('token')
      },
      success: function (res) {
        if (res.statusCode == 200) {
          resolve(res);
        } else {
          reject(res.data);
        }
      },
      error: function (error) {
        reject(error);
      }
    })
  });
  return promise;
};

const post = (url, data, baseUrl = BASE_URL) => {
  const promise = new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + url,
      data: data,
      method: 'POST',
      header: {
        // 'content-type': 'application/x-www-form-urlencoded',
        'content-type': 'application/json; charset=UTF-8',
        // 'token':wx.getStorageSync('token')
      },
      success: function (res) {
        if (res.statusCode == 200) {
          resolve(res);
        } else {
          reject(res.data);
        }
      },
      error: function (error) {
        reject(error);
      }
    })
  });
  return promise;
};

const getLocationPromisified = wxPromisify(wx.getLocation);//获取经纬度
const showModalPromisified = wxPromisify(wx.showModal);//弹窗


module.exports = {
  get,
  post,
  getLocationPromisified,
  showModalPromisified
}