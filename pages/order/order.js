const app = getApp()

Page({

  data: {
    activeTab: 'publish',
    orderList: [],
    showOrderList: []
  },

  onShow() {

    const user = app.globalData.userInfo || {}

    const list = app.globalData.orderList || []

    const publishList = list.filter(i => i.userId === user.userId)

    const takeList = list.filter(i => i.riderId === user.riderId)

    if (this.data.activeTab === 'publish') {
      this.setData({
        orderList: publishList,
        showOrderList: publishList
      })
    } else {
      this.setData({
        orderList: takeList,
        showOrderList: takeList
      })
    }

  },

  switchTab(e) {

    const tab = e.currentTarget.dataset.tab

    this.setData({
      activeTab: tab
    })

    this.onShow()

  },

  finishOrder(e) {

    const order = e.currentTarget.dataset.order

    let list = app.globalData.orderList || []

    list = list.map(i => {
      if (i.id === order.id) {
        i.status = "已完成"
      }
      return i
    })

    app.globalData.orderList = list

    this.onShow()

  }

})