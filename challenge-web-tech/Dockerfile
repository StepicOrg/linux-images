# Version 0.0.1
FROM ubuntu:16.04
RUN apt-get update
RUN apt-get install -y nano
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash
RUN apt-get install -y nodejs
RUN npm i -g @angular/cli
RUN apt-get install -y nginx
RUN npm i -g yarn mocha typescript
RUN npm i -g create-react-app gulp4
RUN apt-get update
RUN apt-get install -y software-properties-common python-software-properties 
RUN LC_ALL=C.UTF-8 add-apt-repository -y -u ppa:ondrej/php
RUN apt-get update
RUN apt-get install -y php7.2-cli php7.2-common php7.2-xml
RUN apt-get install wget
RUN wget https://phar.phpunit.de/phpunit.phar
RUN chmod +x phpunit.phar
RUN mv phpunit.phar /usr/local/bin/phpunit
RUN mkdir /home/user/
COPY . /home/user/
WORKDIR /home/user/lesson03/node
RUN npm install
WORKDIR /home/user/lesson03/node-test
RUN npm install
WORKDIR /home/user/lesson04/html-css-test
RUN npm install
WORKDIR /home/user/lesson05/formpug
RUN npm install
WORKDIR /home/user/lesson05/formpug-test
RUN npm install
WORKDIR /home/user/lesson06/tryajax
RUN npm install
WORKDIR /home/user/lesson06/tryajax-test
RUN npm install
WORKDIR /home/user/lesson07/jquery
RUN npm install
WORKDIR /home/user/lesson07/jquery-test
RUN npm install
WORKDIR /home/user/lesson08/jqueryui
RUN npm install
WORKDIR /home/user/lesson08/jqueryui-test
RUN npm install
WORKDIR /home/user/lesson09/trytsc
RUN npm install
WORKDIR /home/user/lesson09/trytsc-test
RUN npm install
WORKDIR /home/user/lesson10/tryangular-test
RUN npm install
WORKDIR /home/user/lesson11/tryreact-test
RUN npm install
WORKDIR /home/user/lesson12/trytdd
RUN npm install
WORKDIR /home/user/lesson12/trytdd-test
RUN npm install
WORKDIR /home/user/lesson13/trygulp
RUN npm install
WORKDIR /home/user/lesson13/trygulp-test
RUN npm install
RUN mkdir /home/stepik/
WORKDIR /home/stepik/
