FROM node:current-alpine3.14

WORKDIR /var/www/html

EXPOSE 3000

CMD ["tail", "-f", "/dev/null"]
