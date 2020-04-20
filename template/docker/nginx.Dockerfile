FROM nginx:1.11.5

WORKDIR /usr/share/nginx

COPY ./www /usr/share/nginx/html
# volumes里要求路径与下不能一样，所以转移到dockerfile里
# https访问需要以下证书
# COPY ./**.pem /usr/share/nginx
# #私钥
# COPY ./**.key /usr/share/nginx

ENV DOCKER=true
EXPOSE 80