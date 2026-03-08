const app = getApp()

Page({

  data:{
    riderList:[]
  },

  onShow(){

    const list = app.globalData.riderList || []

    this.setData({
      riderList:list
    })

  },

  goJoin(){
    wx.navigateTo({
      url:'/pages/join/join'
    })
  }

})