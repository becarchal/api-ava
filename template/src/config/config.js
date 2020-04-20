const controllerConfig = require('./controllerConfig');
module.exports = {
  ...controllerConfig,
  // default_module: 'api',
  // stickyCluster: true, // WebSocket
  // 错误字段
  errnoField: 'errno', // errno field
  errmsgField: 'errmsg', // errmsg field
  // redis配置 https://github.com/NodeRedis/node_redis
  // redis: {
  //   host: '',
  //   port: '6379', // redis端口
  //   password: 'redispwd' // redis密码
  // },
  // 微信应用配置
  // weixin: {
  //   appid: '', // 小程序 appid
  //   secret: '', // 小程序密钥
  //   mch_id: '', // 商户帐号ID
  //   partner_key: '', // 微信支付密钥
  //   notify_url: '', // 微信异步通知
  //   prefix: 'https://api.weixin.qq.com',
  //   tokenUrl: 'weixinToken'
  // },
  // 百度api应用配置
  // baiduAPi: {
  //   appid: '',
  //   apiKey: '',
  //   secretKey: ''
  // },
  // elasticsearch: {
  //   request_url: ''
  // }
};
