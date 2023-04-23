FROM nginx:latest as production
WORKDIR /app
#
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/certs /etc/nginx/certs

EXPOSE 3000
CMD [ "nginx", "-g", "daemon off;" ]