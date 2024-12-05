<template>
  <div class="login-container">
    <h2>{{ roleText }}登录</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <input
          v-model="username"
          type="text"
          placeholder="用户名"
          required
        />
      </div>
      <div class="form-group">
        <input
          v-model="password"
          type="password"
          placeholder="密码"
          required
        />
      </div>
      <button type="submit">登录</button>
      <button type="button" @click="goToRegister">注册</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      role: this.$route.params.role
    }
  },
  computed: {
    roleText() {
      const roleMap = {
        teacher: '教师',
        student: '学生',
        parent: '家长'
      }
      return roleMap[this.role] || ''
    }
  },
  methods: {
    async handleLogin() {
      try {
        // 调用登录API
        const response = await this.$axios.post('/api/auth/login', {
          username: this.username,
          password: this.password,
          role: this.role
        })
        
        // 存储token
        localStorage.setItem('token', response.data.token)
        
        // 跳转到对应角色的首页
        this.$router.push(`/${this.role}`)
      } catch (error) {
        console.error('登录失败:', error)
      }
    },
    goToRegister() {
      this.$router.push(`/register/${this.role}`)
    }
  }
}
</script> 