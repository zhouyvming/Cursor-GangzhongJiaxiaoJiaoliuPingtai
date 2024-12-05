// pages/subject/english/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    name: '',
    userInfo: null,
    materials: [],
    homework: [],
    myHomework: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const { id, name } = options
    const userInfo = getApp().getUserInfo()
    
    this.setData({
      id,
      name,
      userInfo
    })

    this.loadData()
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

  loadData() {
    if (this.data.userInfo.role === 'teacher') {
      this.loadTeacherData()
    } else {
      this.loadStudentData()
    }
  },

  // 加载教师数据
  loadTeacherData() {
    this.setData({
      materials: [
        {
          id: 1,
          title: 'Unit 1 Reading Materials',
          uploadTime: '2024-03-20',
          teacher: '张老师'
        }
      ],
      homework: [
        {
          id: 1,
          title: 'Reading Comprehension',
          deadline: '2024-03-25',
          status: 'active'
        }
      ]
    })
  },

  // 加载学生数据
  loadStudentData() {
    this.setData({
      materials: [
        {
          id: 1,
          title: 'Unit 1 Textbook',
          uploadTime: '2024-03-20',
          teacher: '张老师'
        }
      ],
      myHomework: [
        {
          id: 1,
          title: 'Reading Exercise',
          deadline: '2024-03-25',
          submitted: false
        }
      ]
    })
  },

  // 显示上传模态框
  showUploadModal() {
    wx.showToast({
      title: '上传功能开发中',
      icon: 'none'
    })
  },

  // 查看全部资料
  goToAllMaterials() {
    wx.navigateTo({
      url: `./materials/index?id=${this.data.id}&name=${this.data.name}`
    })
  },

  // 预览资料
  previewMaterial(e) {
    const { id } = e.detail
    wx.showToast({
      title: '预览功能开发中',
      icon: 'none'
    })
  },

  // 下载资料
  downloadMaterial(e) {
    const { id } = e.detail
    wx.showToast({
      title: '下载功能开发中',
      icon: 'none'
    })
  },

  // 英语特色功能
  openDictionary() {
    wx.showToast({ title: '词典功能开发中', icon: 'none' })
  },
  
  openPronunciation() {
    wx.showToast({ title: '发音练习开发中', icon: 'none' })
  },
  
  openListening() {
    wx.showToast({ title: '听力训练开发中', icon: 'none' })
  },
  
  openTranslation() {
    wx.showToast({ title: '翻译功能开发中', icon: 'none' })
  }
})