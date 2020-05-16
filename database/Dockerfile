FROM mysql:5.7

ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=gallery

ADD schema.sql /docker-entrypoint-initdb.d
