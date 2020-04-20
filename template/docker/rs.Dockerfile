# FROM mhart/alpine-node:8.9.4
FROM registry.cn-hangzhou.aliyuncs.com/aliyun-node/alinode:3.14-alpine

# Create app directory
WORKDIR /root

# 正确的顺序是: 添加package.json；安装npm模块；添加源代码。
COPY ./package.json /root/package.json

# 安装依赖
RUN npm i --registry=https://registry.npm.taobao.org
COPY ./src /root/src
# COPY view /root/view
# COPY www /root/www

# 阿里node.js性能监控平台应用信息 开始 平台的默认home 路径为root # https://help.aliyun.com/product/60298.html
COPY ./alinode/app-config.json /root
ENV ENABLE_NODE_LOG=YES
ENV NODE_LOG_DIR=/root/logs
# 阿里node.js性能监控平台应用信息 结束

COPY ./production.js /root/production.js

ENV DOCKER=true
EXPOSE 8360
# CMD不同于RUN，CMD用于指定在容器启动时所要执行的命令，而RUN用于指定镜像构建时所要执行的命令。
CMD [ "node", "/root/production.js" ]