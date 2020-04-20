import { think as thinkjs } from 'thinkjs';
import path from 'path';
import superkoa from 'superkoa';
require(path.join(process.cwd(), 'production.js'));

export const koaApp = superkoa(thinkjs.app);
export const think = thinkjs;
