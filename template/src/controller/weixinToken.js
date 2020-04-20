const Base = require('./base');

/* 用于需要用微信token调用微信接口的controller继承的基础类，此类以Base类为基础 */
module.exports = class weixinToken extends Base {
  __before() {
    // 修复Uncaught SyntaxError: 'super' keyword unexpected here
    // 如果返回值确定为 Promise，那么就不需要再包装了
    return Promise.resolve(super.__before()).then(flag => {
      // 如果父级想阻止后续继承执行会返回 false，这里判断为 false 的话不再继续执行了。
      if (flag === false) return false;
      // 其他逻辑代码
      // 根据token从redis中获取access_token
      return global.utils.get('weixinTokenUrl').then(function(data) {
        // 获取到值--往下传递
        if (data) {
          return Promise.resolve(data);
        } else {
          // 没获取到值--从微信服务器端获取,并往下传递
          const WeixinSerivce = think.service('weixin'<% if (locals.defaultModule) { %>, '<%= defaultModule %>'<% } %>);
          return WeixinSerivce.updateAccessToken();
        }
      }).then(function(data) {
        think.logger.info(`weixinToken:requestId:${think.uuid()}`, `用户：${think.userId}`);
        if (!data.expires_in) {
          // 没有expire_in值--此data是redis中获取到的
          // 存储weixinAccessToken
          think.weixinAccessToken = data;
        } else {
          // 有expire_in值--此data是微信端获取到的
        /**
         * 保存到redis中,由于微信的access_token是7200秒过期,
         * 存到redis中的数据减少20秒,设置为7180秒过期
         */
          global.utils.set('weixinTokenUrl', `${data.access_token}`, 7180).then(function(result) {
            if (result === 'OK') {
              // 存储weixinAccessToken
              think.weixinAccessToken = data.access_token;
            }
          });
        }
      });
    });
  }
};
