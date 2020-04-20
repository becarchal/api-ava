const Application = require('thinkjs');
const watcher = require('think-watcher');
const path = require('path');

const instance = new Application({
  ROOT_PATH: process.cwd(),
  APP_PATH: path.join(process.cwd(), 'src'), // 不指定src 可能存在老项目里有app文件未清除
  watcher: watcher,
  env: 'development'
});

instance.run();
