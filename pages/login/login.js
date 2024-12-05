Page({
  data: {
    role: '', // teacher, parent, student
    username: '',
    password: ''
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

    // 验证用户身份
    wx.request({
      url: 'https://example.com/api/login', // 替换为实际的登录API
      method: 'POST',
      data: { role, username, password },
      success: (res) => {
        if (res.data.success) {
          wx.setStorageSync('userInfo', res.data.userInfo);
          // ... 登录成功后的逻辑 ...
        } else {
          wx.showToast({
            title: res.data.message,
            icon: 'none'
          });
        }
      },
      fail: () => {
        wx.showToast({
          title: '网络错误，请重试',
          icon: 'none'
        });
      }
    });
  }
}) 