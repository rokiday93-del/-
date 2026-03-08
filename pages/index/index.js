const app = getApp()

Page({

  data: {
    orderList: []
  },

  onShow() {

    const orderList = app.globalData.orderList || []

    this.setData({
      orderList: [...orderList].reverse()
    })

  },

  goPublish() {

    wx.navigateTo({
      url: "/pages/publish/publish"
    })

  },

  takeOrder(e) {

    const order = e.currentTarget.dataset.order
    const user = app.globalData.userInfo

    if (!user.isRider) {

      wx.showModal({
        title: "提示",
        content: "请先成为骑手",
        success(res) {

          if (res.confirm) {

            wx.navigateTo({
              url: "/pages/join/join"
            })

          }

        }
      })

      return
    }

    let list = app.globalData.orderList

    const index = list.findIndex(i => i.id === order.id)

    if (index === -1) return

    list[index].status = "已接单"
    list[index].riderId = user.riderId
    list[index].riderName = user.name

    app.globalData.orderList = list

    wx.showToast({
      title: "接单成功"
    })

    this.onShow()

  }

})