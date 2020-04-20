const WeixinToken = require('./weixinToken');

/* 模版消息已取消，改为订阅消息，参考：https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/subscribe-message/subscribeMessage.addTemplate.html */
module.exports = class extends WeixinToken {
  /**
   * 获取帐号下已存在的模板列表
   * @param {boolean} backEnd 是否是后端发起
   */
  async getTemplateListAction(backEnd) {
    try {
      const options = {
        method: 'POST',
        url: `https://api.weixin.qq.com/cgi-bin/wxopen/template/list?access_token=${think.weixinAccessToken}`,
        body: {
          offset: 0,
          count: 20
        },
        json: true
      };
      const res = await global.rp(options);
      if (res.errcode === 0) {
        if (backEnd) return res.list;
        return this.success(res.list);
      } else {
        return this.fail(res.errmsg);
      }
    } catch (error) {
      return this.fail(error);
    }
  }
};
