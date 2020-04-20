#!/usr/bin/env bash
#image_version=`date +%Y%m%d%H%M`;

# 关闭容器
docker-compose -f ./docker-compose.yml stop || true;
# 删除容器
docker-compose -f ./docker-compose.yml down || true;
# 构建镜像
docker-compose -f ./docker-compose.yml build;
# 镜像推送
# docker-compose push
# 启动并后台运行
docker-compose -f ./docker-compose.yml up -d;
# 查看日志
docker logs rsnodeapp nginx-proxy;
# 对空间进行自动清理
# docker system prune -a -f
docker system prune
