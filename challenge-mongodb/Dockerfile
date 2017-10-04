FROM stepic/challenge-base
MAINTAINER Mark Zaslavskiy <mark.zaslavskiy@gmail.com>

COPY mongodb_key.asc /root/

RUN apt-key add /root/mongodb_key.asc 

RUN echo "deb [ arch=amd64 ] http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.4 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-3.4.list

RUN apt-get update && apt-get install -y mongodb-org && rm -rf /var/lib/apt/lists/*

RUN mkdir  -p /data/db
