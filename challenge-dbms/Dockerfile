FROM stepic/challenge-base
MAINTAINER Pavel Sviderski <ps@stepic.org>

RUN apt-get update && apt-get --no-install-recommends -y install \
    sqlite sqlite3 postgresql-9.3 postgresql-client-9.3 \
 && apt-get clean

COPY init-postgresql.sh /.box/init-postgresql.sh
RUN /.box/init-postgresql.sh

COPY postgresql.bashrc /.box/bashrc.d/box/10-postgresql
