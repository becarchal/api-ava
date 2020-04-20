const model = require('think-model');
const cache = require('think-cache');
const mock = require('think-mock');

// 参考：https://thinkjs.org/zh-cn/doc/3.0/extend.html
module.exports = [
  model(think.app), // 扩展后service里可以用 this.model方法
  mock(think.app), // Mock data extend for ThinkJS 参考：https://github.com/thinkjs/think-mock
  cache
];
