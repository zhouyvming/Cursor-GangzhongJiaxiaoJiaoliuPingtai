import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/login/:role',
    component: () => import('@/views/Login.vue')
  },
  // 教师路由
  {
    path: '/teacher',
    component: () => import('@/views/teacher/Layout.vue'),
    children: [
      { path: 'materials', component: () => import('@/views/teacher/Materials.vue') },
      { path: 'students', component: () => import('@/views/teacher/Students.vue') },
      { path: 'exam-results', component: () => import('@/views/teacher/ExamResults.vue') }
    ]
  },
  // 学生路由
  {
    path: '/student',
    component: () => import('@/views/student/Layout.vue'),
    children: [
      { path: 'forum', component: () => import('@/views/student/Forum.vue') },
      { path: 'exam-results', component: () => import('@/views/student/ExamResults.vue') }
    ]
  },
  // 家长路由
  {
    path: '/parent',
    component: () => import('@/views/parent/Layout.vue'),
    children: [
      { path: 'communication', component: () => import('@/views/parent/Communication.vue') },
      { path: 'student-progress', component: () => import('@/views/parent/StudentProgress.vue') }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router 