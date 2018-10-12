Page({
  formSubmit: function(e) {
    console.log('form发生了submit事件，formId为：', e.detail.formId)
  },
  formReset: function() {
    console.log('form发生了reset事件')
  }
})