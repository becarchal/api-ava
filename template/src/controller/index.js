const Base = require('<%= actionPrefix %>base.js');

module.exports = class extends Base {
  /**
   * @api {get} /index/index index接口
   * @apiName index
   * @apiGroup index
   *
   * @apiSuccess {Number} errno 状态码.
   * @apiSuccess {Array} data 结果数据.
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "errno": 0,
   *       "data": []
   *     }
   *
   * @apiUse UserNotFoundError
   */
  indexAction() {
    return this.success('OK');
  }
};
