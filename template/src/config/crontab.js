// 定时任务配置参考：
// https://thinkjs.org/zh-cn/doc/3.0/crontab.html 
// https://www.cnblogs.com/intval/p/5763929.html

module.exports = [
  // {
  //   interval: '10s',
  //   immediate: true,
  //   enable: true,
  //   handle: 'crontab/updateKeyWords'
  // },
  {
    cron: '0 0 * * *', // 每天0点0分执行 格式为：minute hour day month week
    enable: true,
    handle: 'crontab/updateKeyWords' // 定时更新热搜
    // type: 'all'
  },
];
