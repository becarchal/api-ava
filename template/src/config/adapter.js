// redis
const redisSession = require('think-session-redis');
// fileCache
const fileCache = require('think-cache-file');
// logger3
const {Console, File, DateFile} = require('think-logger3');
const path = require('path');
const database = require('./database.js');
const config = require('./config.js');

const isDev = think.env === 'development';

/**
 * session adapter config
 * @type {Object}
 */
exports.session = {
  type: 'redis',
  common: {
    cookie: {
      name: 'thinkjs'
    }
  },
  redis: {
    handle: redisSession,
    maxAge: '1d',
    ...config.redis
  }
};

/**
 * cache adapter config
 * @type {Object}
 */
exports.cache = {
  type: 'file',
  common: {
    timeout: 24 * 60 * 60 * 1000 // millisecond 单位：毫秒
  },
  file: {
    handle: fileCache,
    cachePath: path.join(think.ROOT_PATH, 'runtime/cache'), // absoulte path is necessarily required
    pathDepth: 1,
    gcInterval: 24 * 60 * 60 * 1000 // gc interval // 清理过期缓存定时时间
  }
};

/**
 * model adapter config
 * @type {Object}
 */
exports.model = {
  type: 'mysql',
  common: {
    logConnect: isDev,
    logSql: isDev,
    logger: msg => think.logger.info(msg)
  },
  mysql: database
};

/**
 * logger adapter config
 * @type {Object}
 */
exports.logger = {
  type: isDev ? 'console' : 'dateFile',
  console: {
    handle: Console
  },
  file: {
    // This adapter will log to a file, and supports split log file by a constant file size.
    handle: File,
    backups: 10, // max chunk number
    absolute: true,
    maxLogSize: 50 * 1024, // 50M
    filename: path.join(think.ROOT_PATH, 'logs/app.log')
  },
  dateFile: {
    // This adapter will log to a file, moving old log messages to timestamped files according to a specified pattern.
    handle: DateFile,
    level: 'ALL',
    absolute: true,
    pattern: '-yyyy-MM-dd',
    alwaysIncludePattern: true,
    filename: path.join(think.ROOT_PATH, 'logs/app.log')
  },
  errorLogFile: {
    // This adapter will log to a file, moving old log messages to timestamped files according to a specified pattern.
    handle: File,
    level: 'error',
    absolute: true,
    pattern: '-yyyy-MM-dd',
    alwaysIncludePattern: true,
    filename: path.join(think.ROOT_PATH, 'errorlogs/app.errorlog')
  }
};
