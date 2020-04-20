// apidoc使用文档地址 https://apidocjs.com/#param-api-description
/**
 * @apiDefine UserNotFoundError
 *
 * @apiError errmsg 错误信息.
 * @apiError errno 错误码.
 * @apiError data 错误数据返回.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 服务器错误
 *     {
 *       "errmsg": "",
 *       "errno": "",
 *       "data": ""
 *     }
 */

module.exports = class extends think.Controller {
  async __before() {
    // 根据token值获取用户id
    think.token = this.ctx.header['api-token'] || '';

    const tokenSerivce = think.service('token'<% if (locals.defaultModule) { %>, '<%= defaultModule %>'<% } %>);
    // 全局think.userId赋值处
    think.userId = await tokenSerivce.getUserId();

    const publicController = this.config('publicController');
    const publicAction = this.config('publicAction');
    // 如果为非公开，则验证用户是否登录
    const controllerAction = this.ctx.controller + '/' + this.ctx.action;
    if (!publicController.includes(this.ctx.controller) && !publicAction.includes(controllerAction)) {
      if (think.userId <= 0) {
        return this.fail(401, '请先登录');
      }
    }
  }

  /**
   * 获取时间戳
   * @returns {Number}
   */
  getTime() {
    return parseInt(Date.now() / 1000);
  }

  /**
   * 获取当前登录用户的id
   * @returns {*}
   */
  getLoginUserId() {
    return think.userId;
  }
};
