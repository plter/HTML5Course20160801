//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    // wx.navigateTo({
    //   url: '../logs/logs'
    // })

    // wx.showToast({title:"这是一个提示框",icon:"loading"});
  },

  touchendHandler:function(e){
    // console.log(e);
    wx.showModal({title:"标题",content:"内容"});
  },

  btnShowGamePageTapHandler:function(e){
    wx.navigateTo({
      url: '../game/game',
    })
  },
  btnShowDataBindingPage:function(e){
      wx.navigateTo({
        url: '../databinding/databinding'
      })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
