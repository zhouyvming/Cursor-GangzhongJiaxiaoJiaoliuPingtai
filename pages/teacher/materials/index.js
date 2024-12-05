// pages/teacher/materials/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    materials: [], // 资料列表
    showUploadModal: false, // 是否显示上传弹窗
    newMaterial: {}, // 新资料信息
    searchKey: '' // 搜索关键词
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.loadMaterials()
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

  // 加载资料列表
  loadMaterials() {
    wx.request({
      url: 'https://example.com/api/materials', // 替换为实际的API
      method: 'GET',
      success: (res) => {
        this.setData({
          materials: res.data.materials
        });
      },
      fail: () => {
        wx.showToast({
          title: '加载资料失败',
          icon: 'none'
        });
      }
    });
  },

  // 搜索资料
  onSearch(e) {
    this.setData({ searchKey: e.detail.value })
    // 实现搜索逻辑
  },

  // 显示上传弹窗
  showUploadModal() {
    this.setData({
      showUploadModal: true,
      newMaterial: {}
    })
  },

  // 隐藏上传弹窗
  hideUploadModal() {
    this.setData({
      showUploadModal: false
    })
  },

  // 选择文件
  selectFile() {
    wx.chooseMessageFile({
      count: 1,
      type: 'file',
      success: (res) => {
        const file = res.tempFiles[0]
        this.setData({
          'newMaterial.fileName': file.name,
          'newMaterial.tempFilePath': file.path
        })
      }
    })
  },

  // 确认上传
  confirmUpload() {
    const { title, description, fileName } = this.data.newMaterial
    if (!title || !description || !fileName) {
      wx.showToast({
        title: '请填写完整信息',
        icon: 'none'
      })
      return
    }

    // 这里添加文件上传逻辑
    wx.showLoading({ title: '上传中' })
    setTimeout(() => {
      wx.hideLoading()
      this.hideUploadModal()
      wx.showToast({
        title: '上传成功',
        icon: 'success'
      })
      this.loadMaterials() // 重新加载列表
    }, 1500)
  },

  // 预览文件
  previewFile(e) {
    const url = e.currentTarget.dataset.url
    // 实现文件预览逻辑
    wx.showToast({
      title: '正在打开文件...',
      icon: 'none'
    })
  },

  // 下载文件
  downloadFile(e) {
    const url = e.currentTarget.dataset.url
    // 实现文件下载逻辑
    wx.showToast({
      title: '开始下载...',
      icon: 'none'
    })
  },

  // 删除资料
  deleteMaterial(e) {
    const id = e.currentTarget.dataset.id
    wx.showModal({
      title: '确认删除',
      content: '确定要删除这个资料吗？',
      success: (res) => {
        if (res.confirm) {
          // 实现删除逻辑
          const materials = this.data.materials.filter(item => item.id !== id)
          this.setData({ materials })
          wx.showToast({
            title: '删除成功',
            icon: 'success'
          })
        }
      }
    })
  },

  // 返回上一页
  goBack() {
    wx.navigateBack({
      delta: 1
    })
  }
})