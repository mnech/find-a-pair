FROM nginx:latest as production
WORKDIR /app
#
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE $CLIENT_PORT:80
CMD [ "nginx", "-g", "daemon off;" ]