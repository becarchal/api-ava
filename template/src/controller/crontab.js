const WeixinToken = require('./weixinToken');

// 用promise实现优雅休眠
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// 定时任务专用controller
module.exports = class extends WeixinToken {
  // 每日定时任务把热门搜索前6关键词插入到关键词库
  async updateKeyWordsAction() {
    // 如果不是定时任务调用，则拒绝
    if (!this.isCli) return this.fail(1000, 'deny');
    // const res = await this.model('search_history').field('keyword, count(*) as count').group('keyword').order('count DESC').limit(6).select();
  }
};
