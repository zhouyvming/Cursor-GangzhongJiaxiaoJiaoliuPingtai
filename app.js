App({
  globalData: {
    userInfo: null
  },

  onLaunch() {
    // 获取本地存储的用户信息
    const userInfo = wx.getStorageSync('userInfo')
    if (userInfo) {
      this.globalData.userInfo = userInfo
    }
  },

  // 登录
  login(userInfo) {
    this.globalData.userInfo = userInfo
    wx.setStorageSync('userInfo', userInfo)
  },

  // 登出
  logout() {
    this.globalData.userInfo = null
    wx.removeStorageSync('userInfo')
  },

  // 检查登录状态
  checkLogin() {
    return !!this.globalData.userInfo
  },

  // 获取用户信息
  getUserInfo() {
    return this.globalData.userInfo
  }
}) 