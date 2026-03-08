const app = getApp()

Page({

  data: {
    name: "",
    phone: "",
    studentId: ""
  },

  onShow() {
    const userInfo = app.globalData.userInfo || {}
    this.setData({
      name: userInfo.name || "",
      phone: userInfo.phone || "",
      studentId: userInfo.studentId || ""
    })
  },

  onInput(e) {
    const field = e.currentTarget.dataset.field

    this.setData({
      [field]: e.detail.value
    })
  },

  submitJoin(){

    const { name, phone, studentId } = this.data

    if (!name || !phone || !studentId) {
      wx.showToast({
        title: "请填写完整信息",
        icon: "none"
      })
      return
    }

    const userInfo = app.globalData.userInfo || {}
    const isEditing = userInfo.isRider && userInfo.riderId
    const riderId = isEditing ? userInfo.riderId : "rider_" + Date.now()

    const rider = {
      riderId,
      name,
      phone,
      studentId,
      orderCount: userInfo.orderCount || 0
    }

    let list = app.globalData.riderList || []
    if (isEditing) {
      const idx = list.findIndex(i => i.riderId === riderId)
      if (idx > -1) {
        list[idx] = {
          ...list[idx],
          ...rider
        }
      } else {
        list.push(rider)
      }
    } else {
      list.push(rider)
    }

    app.globalData.riderList = list

    app.globalData.userInfo = {
      ...userInfo,
      ...rider,
      isRider: true,
      userId: userInfo.userId || "user_" + Date.now()
    }

    wx.showToast({
      title: isEditing ? "更新成功" : "入驻成功"
    })

    setTimeout(() => {
      wx.navigateBack()
    }, 1000)

  }

})