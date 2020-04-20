// thinkjs单元测试文档 https://thinkjs.org/zh-cn/doc/3.0/unitest.html
// ejs https://ejs.bootcss.com/#features
// ava 测试文档 https://github.com/avajs/ava-docs/blob/master/zh_CN/readme.md

import _ from 'lodash';
import { test, describe, before, after, beforeEach, afterEach } from 'ava-spec';
import { think } from '../helpers/app';

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

describe('elasticsearch service', (it) => {
  const service = think.service('elasticsearch'<% if (locals.defaultModule) { %>, '<%= defaultModule %>'<% } %>);
  const func = service.getWastes;

  it('获取垃圾查询结果:elasticsearch/getWastes', async(t) => {
    // const args = [{ userId: 123 }];
    const args = ['包包'];
    const result = await func.apply(service, args);
    // 因为没有elasticsearch服务，返回的结果是[]。要正确开启功能请连接可访问的elasticsearch服务
    t.is(_.isEmpty(result), true);
  });
});
