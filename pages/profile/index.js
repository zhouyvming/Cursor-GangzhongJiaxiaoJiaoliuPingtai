Page({
  data: {
    userInfo: null,
    role: '',
    username: '',
    password: ''
  },

  onLoad() {
    this.checkLoginStatus()
  },

  onShow() {
    this.checkLoginStatus()
  },

  checkLoginStatus() {
    const userInfo = wx.getStorageSync('userInfo')
    if (userInfo) {
      userInfo.subject = '语文'
      this.setData({ userInfo })
    } else {
      this.setData({ userInfo: null })
    }
  },

  goToLogin() {
    wx.navigateTo({
      url: '/pages/login/login'
    })
  },

  goToProfile() {
    wx.navigateTo({ url: '/pages/profile/info/index' })
  },

  goToClass() {
    wx.navigateTo({ url: '/pages/profile/class/index' })
  },

  goToMyAnswers() {
    wx.navigateTo({ url: '/pages/profile/answers/index' })
  },

  goToMyPosts() {
    wx.navigateTo({ url: '/pages/profile/posts/index' })
  },

  goToMyCollections() {
    wx.navigateTo({ url: '/pages/profile/collections/index' })
  },

  goToSettings() {
    wx.navigateTo({ url: '/pages/profile/settings/index' })
  },

  // 退出登录
  handleLogout() {
    wx.showModal({
      title: '提示',
      content: '确定要退出登录吗？',
      success: (res) => {
        if (res.confirm) {
          // 清除用户信息
          wx.removeStorageSync('userInfo')
          // 更新页面状态
          this.setData({
            userInfo: null
          })
          // 显示提示
          wx.showToast({
            title: '已退出登录',
            icon: 'success'
          })
          // 返回首页
          wx.switchTab({
            url: '/pages/index/index'
          })
        }
      }
    })
  },

  // 选择角色
  selectRole(e) {
    const role = e.currentTarget.dataset.role
    this.setData({ role })
  },

  // 输入用户名
  inputUsername(e) {
    this.setData({
      username: e.detail.value
    })
  },

  // 输入密码
  inputPassword(e) {
    this.setData({
      password: e.detail.value
    })
  },

  // 处理登录
  handleLogin() {
    const { role, username, password } = this.data
    
    if (!role) {
      wx.showToast({
        title: '请选择身份',
        icon: 'none'
      })
      return
    }
    
    if (!username || !password) {
      wx.showToast({
        title: '请输入用户名和密码',
        icon: 'none'
      })
      return
    }

    // 模拟登录验证
    if (username === 'admin' && password === 'admin') {
      // 保存用户信息
      const userInfo = {
        name: role === 'teacher' ? '张老师' : 
              role === 'parent' ? '张家长' : '张同学',
        role: role,
        subject: role === 'teacher' ? '语文' : ''
      }
      wx.setStorageSync('userInfo', userInfo)
      
      // 更新页面状态
      this.setData({ userInfo })

      wx.showToast({
        title: '登录成功',
        icon: 'success'
      })
    } else {
      wx.showToast({
        title: '用户名或密码错误',
        icon: 'none'
      })
    }
  }
}) 