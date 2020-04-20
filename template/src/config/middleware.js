const path = require('path');
const isDev = think.env === 'development';
const kcors = require('kcors');

/** 框架内置了几个中间件
meta 显示一些 meta 信息，如：发送 ThinkJS 的版本号，接口的处理时间等等
resource 处理静态资源，生产环境建议关闭，直接用 webserver 处理即可。
trace 处理报错，开发环境将详细的报错信息显示处理，也可以自定义显示错误页面。
payload 处理表单提交和文件上传，类似于 koa-bodyparser 等 middleware
router 路由解析，包含自定义路由解析
logic logic 调用，数据校验
controller controller 和 action 调用
 */

module.exports = [
  {
    handle: kcors, // 处理跨域
    options: {}
  },
  {
    handle: 'meta', // 中间件处理函数  内置的中间件不用手工 require 进来，直接通过字符串的方式引用
    options: { // 当前中间件需要的配置
      logRequest: isDev,
      sendResponseTime: isDev
    }
  },
  {
    handle: 'resource',
    enable: isDev, // 是否开启当前中间件
    options: {
      root: path.join(think.ROOT_PATH, 'www'),
      publicPath: /^\/(static|favicon\.ico)/
    }
  },
  {
    handle: 'trace',
    enable: !think.isCli,
    options: {
      debug: isDev
    }
  },
  {
    handle: 'payload',
    options: {
      keepExtensions: true,
      limit: '5mb'
    }
  },
  {
    handle: 'router',
    options: { 
      <% if (locals.defaultModule) { %>defaultModule: '<%= defaultModule %>',<% } %>
      defaultController: 'index',
      defaultAction: 'index',
    }
  },
  'logic',
  'controller'
];
