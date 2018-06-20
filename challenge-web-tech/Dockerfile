# Version 0.0.4
FROM ubuntu:16.04
MAINTAINER Belyaev Sergey <bserge@bk.ru>

RUN apt-get update && apt-get install -y nano curl \
	&& curl -sL https://deb.nodesource.com/setup_8.x | bash
RUN apt-get update && apt-get install -y nginx nodejs software-properties-common python-software-properties \
	&& npm i -g @angular/cli yarn mocha typescript create-react-app gulp4
RUN LC_ALL=C.UTF-8 add-apt-repository -y -u ppa:ondrej/php
RUN apt-get update && apt-get install -y php7.2-cli php7.2-common php7.2-xml wget git \
	&& apt-get clean \
	&& useradd -m box 
RUN wget https://phar.phpunit.de/phpunit.phar \
	&& chmod +x phpunit.phar \
	&& mv phpunit.phar /usr/local/bin/phpunit

WORKDIR /home/box
