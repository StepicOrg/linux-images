# Version 0.0.2
FROM ubuntu:16.04
MAINTAINER Belyaev Sergey <bserge@bk.ru>
RUN apt-get update && apt-get install -y nano curl nginx
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash
RUN apt-get install -y nodejs
RUN npm i -g @angular/cli yarn mocha typescript create-react-app gulp4
RUN apt-get update && apt-get install -y software-properties-common python-software-properties 
RUN LC_ALL=C.UTF-8 add-apt-repository -y -u ppa:ondrej/php
RUN apt-get update && apt-get install -y php7.2-cli php7.2-common php7.2-xml wget git
RUN wget https://phar.phpunit.de/phpunit.phar
RUN chmod +x phpunit.phar
RUN mv phpunit.phar /usr/local/bin/phpunit

