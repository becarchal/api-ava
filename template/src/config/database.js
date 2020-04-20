const mysql = require('think-model-mysql');

module.exports = {
  handle: mysql, // Adapter handle
  database: '', // 数据库
  prefix: '', // 数据表前缀，如果一个数据库里有多个项目，那项目之间的数据表可以通过前缀来区分
  encoding: 'utf8mb4',
  port: '3306', // 端口
  // host: '127.0.0.1', // 本地host
  // user: 'root', // 本地用户
  host: '', // 服务器host
  user: '', // 服务器用户名
  password: '', // 密码
  pageSize: 20, // 设置默认每页为 20 条
  connectionLimit: 1, // 连接池的连接个数，默认为 1
  acquireWaitTimeout: 0, // 等待连接的超时时间，避免获取不到连接一直卡在那里，开发环境下有用
  dateStrings: true //  Force date types (TIMESTAMP, DATETIME, DATE) to be returned as strings rather than inflated into JavaScript Date objects.
};
