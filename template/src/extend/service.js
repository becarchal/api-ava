const requestPromise = require('request-promise');

/*
*扩展 think.Service 类 https://thinkjs.org/zh-cn/doc/3.0/extend.html
*可以通过 this.rp()访问extend/service.js 里扩展的方法
*/
module.exports = {
  rp: requestPromise
};
