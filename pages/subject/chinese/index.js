Page({
  data: {
    id: '',
    name: '',
    userInfo: null,
    materials: [],
    homework: [],
    myHomework: []
  },

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
    // 加载教学资料
    this.setData({
      materials: [
        {
          id: 1,
          title: '必修一教案',
          uploadTime: '2024-03-20',
          teacher: '张老师'
        },
        {
          id: 2,
          title: '古诗文赏析',
          uploadTime: '2024-03-19',
          teacher: '张老师'
        }
      ],
      // 加载作业列表
      homework: [
        {
          id: 1,
          title: '第一单元测试',
          deadline: '2024-03-25',
          status: 'active'
        },
        {
          id: 2,
          title: '古诗默写',
          deadline: '2024-03-18',
          status: 'ended'
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
          title: '必修一教材',
          uploadTime: '2024-03-20',
          teacher: '张老师'
        }
      ],
      myHomework: [
        {
          id: 1,
          title: '第一单元测试',
          deadline: '2024-03-25',
          submitted: false
        },
        {
          id: 2,
          title: '古诗默写',
          deadline: '2024-03-18',
          submitted: true
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