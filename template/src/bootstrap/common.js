const dayjs = require('dayjs');
const rp = require('request-promise');
require('./redis');

global.dayjs = dayjs;
global.rp = rp;
