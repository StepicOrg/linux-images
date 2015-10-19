FROM ubuntu:14.04
MAINTAINER Pavel Sviderski <ps@stepic.org>

RUN apt-get update && apt-get --no-install-recommends -y install \
    man openssh-server wget python-pip \
    vim nano screen tmux \
    binutils build-essential gdb ltrace strace \
    sqlite sqlite3 \
    postgresql postgresql-client \
 && apt-get clean \
 && useradd -m box

RUN sed -i 's/UsePAM yes/#UsePAM yes/g' /etc/ssh/sshd_config \
 && sed -i 's/#UsePAM no/UsePAM no/g' /etc/ssh/sshd_config \
 && echo "box ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/box

COPY common/ssh /root/.ssh
COPY common/bashrc /root/.bashrc

COPY challenge-dbms/start.sh /.box/start.sh
COPY challenge-dbms/init-postgresql.sh /.box/init-postgresql.sh
COPY challenge-dbms/bashrc /home/box/.bashrc

COPY common/greeting /.box/greeting

EXPOSE 22

CMD /.box/start.sh
