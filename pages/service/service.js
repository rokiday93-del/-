Page({
  aiService() {
    wx.showModal({
      title: 'AI智能客服',
      content: '你好！我是AI助手，可咨询以下问题：\n1. 如何发布订单\n2. 如何成为骑手接单\n3. 提现相关问题\n4. 订单纠纷处理',
      showCancel: false
    })
  },
  humanService() {
    wx.makePhoneCall({
      phoneNumber: '13800138000', // 替换成你的客服电话
      success: () => {
        wx.showToast({
          title: '正在拨打客服电话',
          icon: 'none'
        })
      }
    })
  }
})