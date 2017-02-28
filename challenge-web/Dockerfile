FROM stepic/challenge-base
MAINTAINER Pavel Sviderski <ps@stepic.org>

RUN apt-get update && apt-get --no-install-recommends -y install \
    mysql-server-5.5 mysql-client-5.5 libmysqlclient-dev \
    nginx-extras gunicorn \
    python-django python-mysqldb python3-dev \
 && apt-get clean \
 && pip install django --upgrade \
 && pip3 install django gunicorn mysqlclient
