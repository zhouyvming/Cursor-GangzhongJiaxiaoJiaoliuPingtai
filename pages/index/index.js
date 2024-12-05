// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    subjects: [
      { 
        id: 1, 
        name: '语', 
        fullName: '语文', 
        code: 'chinese',
        path: '/pages/subject/chinese/index' 
      },
      { 
        id: 2, 
        name: '数', 
        fullName: '数学', 
        code: 'math',
        path: '/pages/subject/math/index' 
      },
      { 
        id: 3, 
        name: '英', 
        fullName: '英语', 
        code: 'english',
        path: '/pages/subject/english/index' 
      },
      { 
        id: 4, 
        name: '物', 
        fullName: '物理', 
        code: 'physics',
        path: '/pages/subject/physics/index' 
      },
      { 
        id: 5, 
        name: '化', 
        fullName: '化学', 
        code: 'chemistry',
        path: '/pages/subject/chemistry/index' 
      },
      { 
        id: 6, 
        name: '生', 
        fullName: '生物', 
        code: 'biology',
        path: '/pages/subject/biology/index' 
      },
      { 
        id: 7, 
        name: '政', 
        fullName: '政治', 
        code: 'politics',
        path: '/pages/subject/politics/index' 
      },
      { 
        id: 8, 
        name: '史', 
        fullName: '历史', 
        code: 'history',
        path: '/pages/subject/history/index' 
      },
      { 
        id: 9, 
        name: '地', 
        fullName: '地理', 
        code: 'geography',
        path: '/pages/subject/geography/index' 
      },
      { 
        id: 10, 
        name: '图', 
        fullName: '信息技术', 
        code: 'it',
        path: '/pages/subject/it/index' 
      },
      { 
        id: 11, 
        name: '音', 
        fullName: '音乐', 
        code: 'music',
        path: '/pages/subject/music/index' 
      },
      { 
        id: 12, 
        name: '体', 
        fullName: '体育', 
        code: 'pe',
        path: '/pages/subject/pe/index' 
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  goToSubject(e) {
    const id = e.currentTarget.dataset.id
    const subject = this.data.subjects.find(item => item.id === id)
    
    // 检查登录状态
    const userInfo = wx.getStorageSync('userInfo')
    if (!userInfo) {
      wx.showToast({
        title: '请先登录',
        icon: 'none'
      })
      return
    }
    
    // 跳转到对应科目页面
    wx.navigateTo({
      url: `${subject.path}?id=${id}&name=${subject.fullName}`
    })
  }
})