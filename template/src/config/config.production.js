// production config, it will load in production enviroment
const numCPUs = require('os').cpus().length;
module.exports = {
  workers: numCPUs
};
