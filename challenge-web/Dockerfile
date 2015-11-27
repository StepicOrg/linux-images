FROM stepic/challenge-base
MAINTAINER Pavel Sviderski <ps@stepic.org>

RUN apt-get update && apt-get --no-install-recommends -y install \
    mysql-server-5.5 mysql-client-5.5 nginx-extras gunicorn \
    python-django python-mysqldb \
 && apt-get clean
