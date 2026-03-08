const app = getApp()

Page({

  data: {

    fromAddress: "",
    toAddress: "",
    code: "",
    phone: "",
    price: "",
    size: "请选择",

    sizeList: ["小件","中件","大件"],

    valuable:false
  },

  inputFrom(e){
    this.setData({
      fromAddress:e.detail.value
    })
  },

  inputTo(e){
    this.setData({
      toAddress:e.detail.value
    })
  },

  inputCode(e){
    this.setData({
      code:e.detail.value
    })
  },

  inputPhone(e){
    this.setData({
      phone:e.detail.value
    })
  },

  inputPrice(e){
    this.setData({
      price:e.detail.value
    })
  },

  chooseSize(e){

    const size=this.data.sizeList[e.detail.value]

    this.setData({
      size:size
    })

  },

  switchValue(e){

    this.setData({
      valuable:e.detail.value
    })

  },

  publishOrder(){

    const order={

      fromAddress:this.data.fromAddress,
      toAddress:this.data.toAddress,

      code:this.data.code,
      phone:this.data.phone,

      price:this.data.price,
      size:this.data.size,
      valuable:this.data.valuable,

      status:"待接单",
      createTime:new Date().toLocaleString(),

      riderName:""

    }

    if(!app.globalData.orderList){
      app.globalData.orderList=[]
    }

    app.globalData.orderList.unshift(order)

    wx.showToast({
      title:"发布成功"
    })

    setTimeout(()=>{
      wx.navigateTo({
        url:"/pages/order/order"
      })
    },1000)

  }

})