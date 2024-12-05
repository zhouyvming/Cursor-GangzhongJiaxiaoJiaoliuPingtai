Page({
  data: {
    posts: [], // 帖子列表
    showPostModal: false, // 是否显示发帖弹窗
    newPost: {}, // 新帖子数据
    pageNum: 1, // 当前页码
    pageSize: 10, // 每页数量
    hasMore: true, // 是否还有更多数据
    isLoading: false // 是否正在加载
  },

  onLoad() {
    this.loadPosts(true)
  },

  // 下拉刷新
  async onPullDownRefresh() {
    try {
      // 重置页码
      this.setData({
        pageNum: 1,
        hasMore: true
      })
      // 重新加载数据
      await this.loadPosts(true)
    } catch (error) {
      console.error('刷新失败:', error)
    } finally {
      wx.stopPullDownRefresh()
    }
  },

  // 上拉加载更多
  async onReachBottom() {
    if (!this.data.hasMore || this.data.isLoading) return
    
    try {
      await this.loadPosts()
    } catch (error) {
      console.error('加载更多失败:', error)
    }
  },

  // 加载帖子列表
  async loadPosts(isRefresh = false) {
    if (this.data.isLoading) return

    this.setData({ isLoading: true })

    try {
      // 这里替换为实际的API调用
      const res = await new Promise(resolve => {
        setTimeout(() => {
          resolve({
            data: {
              list: [
                {
                  id: Date.now(),
                  title: '新的帖子' + Date.now(),
                  content: '这是一个测试帖子...',
                  authorName: '张老师',
                  createTime: '2024-03-20',
                  commentCount: Math.floor(Math.random() * 100),
                  likeCount: Math.floor(Math.random() * 100)
                }
              ],
              total: 100
            }
          })
        }, 1000)
      })

      const newPosts = res.data.list
      const total = res.data.total

      this.setData({
        posts: isRefresh ? newPosts : [...this.data.posts, ...newPosts],
        pageNum: this.data.pageNum + 1,
        hasMore: this.data.posts.length < total
      })

      if (isRefresh) {
        wx.showToast({
          title: '刷新成功',
          icon: 'success'
        })
      }
    } catch (error) {
      wx.showToast({
        title: '加载失败',
        icon: 'none'
      })
    } finally {
      this.setData({ isLoading: true })
    }
  },

  // 显示发帖弹窗
  showPostModal() {
    this.setData({
      showPostModal: true,
      newPost: {}
    })
  },

  // 隐藏发帖弹窗
  hidePostModal() {
    this.setData({
      showPostModal: false
    })
  },

  // 提交发帖
  async submitPost() {
    const { title, content } = this.data.newPost
    if (!title || !content) {
      wx.showToast({
        title: '请填写完整内容',
        icon: 'none'
      })
      return
    }

    wx.showLoading({ title: '发布中' })

    try {
      // 这里替换为实际的API调用
      await new Promise(resolve => setTimeout(resolve, 1000))

      this.hidePostModal()
      wx.showToast({
        title: '发布成功',
        icon: 'success'
      })

      // 刷新列表
      this.setData({ pageNum: 1 })
      this.loadPosts(true)
    } catch (error) {
      wx.showToast({
        title: '发布失败',
        icon: 'none'
      })
    } finally {
      wx.hideLoading()
    }
  },

  // 提交评论
  async submitComment(e) {
    const { postId, comment } = e.detail.value

    try {
      // 这里替换为实际的API调用
      await new Promise(resolve => setTimeout(resolve, 1000))

      wx.showToast({
        title: '评论成功',
        icon: 'success'
      })

      // 刷新当前帖子的评论
      const posts = this.data.posts.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            commentCount: post.commentCount + 1
          }
        }
        return post
      })

      this.setData({ posts })
    } catch (error) {
      wx.showToast({
        title: '评论失败',
        icon: 'none'
      })
    }
  }
}) 