const jwt = require('jsonwebtoken');
const secret = 'SLDLKKDS323ssdd@#@@gf';

module.exports = class extends think.Service {
  /**
   * 根据header中的refuse-sorting-token值获取用户id
   */
  async getUserId() {
    const token = think.token;
    if (!token) {
      return 0;
    }

    const result = await this.parse();
    if (think.isEmpty(result) || result.user_id <= 0) {
      return 0;
    }

    return result.user_id;
  }

  /**
   * 根据值获取用户信息
   */
  async getUserInfo() {
    const userId = await this.getUserId();
    if (userId <= 0) {
      return null;
    }

    const userInfo = await this.model('user').field(['id', 'username', 'nickname', 'gender', 'avatar', 'birthday']).where({ id: userId }).find();

    return think.isEmpty(userInfo) ? null : userInfo;
  }
  /** 根据用户信息生成token
   * @param  {object} userInfo
   * @returns {string}
   */
  async create(userInfo) {
    const token = jwt.sign(userInfo, secret/* , { expiresIn: 60 * 60 } token过期设置 */);
    return token;
  }
  /** 解析token
   */
  async parse() {
    if (think.token) {
      try {
        return jwt.verify(think.token, secret);
      } catch (err) {
        return null;
      }
    }
    return null;
  }
  /** 验证token是否有效
   */
  async verify() {
    const result = await this.parse();
    if (think.isEmpty(result)) {
      return false;
    }

    return true;
  }
};
