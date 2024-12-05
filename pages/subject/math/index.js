// pages/subject/math/index.js
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

  // 加载页面数据
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
          title: '数学必修一教案',
          uploadTime: '2024-03-20',
          teacher: '张老师'
        }
      ],
      homework: [
        {
          id: 1,
          title: '一元二次方程练习',
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
          title: '数学必修一教材',
          uploadTime: '2024-03-20',
          teacher: '张老师'
        }
      ],
      myHomework: [
        {
          id: 1,
          title: '一元二次方程练习',
          deadline: '2024-03-25',
          submitted: false
        }
      ]
    })
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

  // 查看全部作业
  goToAllHomework() {
    wx.navigateTo({
      url: `./homework/index?id=${this.data.id}&name=${this.data.name}`
    })
  },

  // 提交作业
  submitHomework(e) {
    const id = e.currentTarget.dataset.id
    wx.showToast({
      title: '作业提交功能开发中',
      icon: 'none'
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
  }
})