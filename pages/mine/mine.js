const app = getApp()

Page({

  data:{
    userInfo:{}
  },

  onShow() {
    this.setData({
      userInfo: app.globalData.userInfo || {}
    })
  },

  bindWechat() {
    wx.getUserProfile({
      desc: '用于完善个人信息',
      success: res => {
        const { nickName, avatarUrl } = res.userInfo || {}
        const userInfo = {
          ...app.globalData.userInfo,
          nickName,
          avatarUrl
        }
        app.globalData.userInfo = userInfo
        this.setData({ userInfo })
      },
      fail() {
        wx.showToast({
          title: '绑定失败',
          icon: 'none'
        })
      }
    })
  },

  goJoin() {
    wx.navigateTo({
      url: "/pages/join/join"
    })
  }

})