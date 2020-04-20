// 因为redis也算一个数据库
// 因此最好和redis的交流有一个比较规范的接口
// 不要随意使用redis原生方法
// 便于以后调整优化切换等
// 若要使用redis功能恢复以下注释代码

// const redis = require('redis');
// const redisConfig = think.config('redis');
// class Redis {
//   constructor() {
//     this.redisClient = redis.createClient(redisConfig);
//     this.redisClient.on('error', this.error);

//     this.redisClient.on('connect', function() {
//       think.logger.info(`Redis连接成功:requestId:${think.uuid()}`);
//     });
//     const utils = redis.RedisClient.prototype;
//     for (const name in utils) {
//       this[name] = this.promisify(utils[name]);
//     }
//   }
//   error(err) {
//     console.error(err);
//   }
//   promisify(fn) {
//     return (...args) => {
//       return new Promise((resolve, reject) => {
//         fn.call(this.redisClient, ...args, (err, obj) => {
//           return err ? reject(err) : resolve(obj);
//         });
//       });
//     };
//   }
// }

// // https://blog.csdn.net/zzwwjjdj1/article/details/52222748
// // 检查微信签名认证中间件

// const utils = {};
// /**
//  * 添加string类型的数据
//  * @param key 键
//  * @params value 值
//  * @params expire (过期时间,单位秒;可为空，为空表示不过期)
//  */
// utils.set = function(key, value, expire) {
//   return new Promise(function(resolve, reject) {
//     global.rediser.redisClient.set(key, value, function(err, result) {
//       if (err) {
//         reject(err);
//         return;
//       }
//       if (!isNaN(expire) && expire > 0) {
//         global.rediser.redisClient.expire(key, parseInt(expire));
//       }
//       resolve(result);
//     });
//   });
// };

// /**
//  * 查询string类型的数据
//  * @param key 键
//  */
// utils.get = function(key) {
//   return new Promise(function(resolve, reject) {
//     global.rediser.redisClient.get(key, function(err, result) {
//       if (err) {
//         reject(err);
//         return;
//       }
//       resolve(result);
//     });
//   });
// };

// global.rediser = new Redis();
// global.utils = utils;
