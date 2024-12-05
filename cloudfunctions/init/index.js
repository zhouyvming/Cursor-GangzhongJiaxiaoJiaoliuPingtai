// 初始化数据库集合
const collections = [
  {
    name: 'users',
    properties: {
      _openid: String,      // 微信openid
      username: String,     // 用户名
      role: String,         // 角色：teacher/parent/student
      name: String,         // 真实姓名
      createdAt: Date
    }
  },
  {
    name: 'teachers',
    properties: {
      userId: String,       // 关联users表
      subject: String,      // 任教科目
      createdAt: Date
    }
  },
  {
    name: 'classes',
    properties: {
      name: String,         // 班级名称
      gradeLevel: Number,   // 年级
      teacherId: String,    // 班主任ID
      createdAt: Date
    }
  },
  {
    name: 'students',
    properties: {
      userId: String,       // 关联users表
      classId: String,      // 所属班级
      createdAt: Date
    }
  },
  {
    name: 'parents',
    properties: {
      userId: String,       // 关联users表
      studentId: String,    // 关联的学生
      createdAt: Date
    }
  }
] 