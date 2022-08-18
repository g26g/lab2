Page({

  /**
   * 页面的初始数据
   */
  data: {
    region:['安徽省','芜湖市','镜湖区'],
    now:{
      tmp:0,
      cond_txt:'未知',
      cond_code:'999',
      hum:0,
      pres:0,
      vis:0,
      wind_dir:0,
      wind_spd:0,
      wind_sc:0
    }
  },
  getWeather: function () {
    var that = this;//this不可以直接在wxAPI函数内部使用
    wx.request({
      url: 'https://free-api.heweather.com/s6/weather/now',  //后端程序
      data:{
        location:that.data.region[1],
        key:'58cde137c76f44f5bc7885fc1e711aa9'  //也可以换成其他的和风天气密钥key
      },
      success:function(res){
        console.log(res.data);
        that.setData({now:res.data.HeWeather6[0].now});
      }
    })
  },
  
  regionChange:function(e){
    this.setData({region:e.detail.value});
    this.getWeather();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getWeather();
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})