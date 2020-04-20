// thinkjs单元测试文档 https://thinkjs.org/zh-cn/doc/3.0/unitest.html
// ava 测试文档 https://github.com/avajs/ava-docs/blob/master/zh_CN/readme.md
// 单元测试的几个指标 https://www.jianshu.com/p/1a89b2df6423
import { test, describe, before, after, beforeEach, afterEach } from 'ava-spec';
import { koaApp, think } from '../helpers/app';

before(async t => {
  // 这个会在所有测试前运行
  // think.app.once('appReady', t);
});

after('cleanup', t => {
  // 这个会在所有测试之后运行
});

beforeEach(t => {
  // 这个会在每个测试之前运行
});

afterEach(t => {
  // 这个会在每个测试之后运行
});

describe('首页index', (it) => {
  it('首页:index/index', async(t) => {
    const indexModel = think.model('index');
    const res = await koaApp.get('/index/index');
    t.is(res.status, 200);
    t.is(res.body.data, 'OK');
  });
});