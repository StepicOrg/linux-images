FROM phusion/baseimage
MAINTAINER Pavel Sviderski <ps@stepic.org>

RUN apt-get -y update
RUN apt-get -y install git curl wget nano vim screen tmux \
    nginx-extras python python-django gunicorn \
    python-mysqldb mysql-server-5.5 mysql-client-5.5
RUN apt-get clean
RUN useradd -m box

RUN rm -f /etc/service/sshd/down && /etc/my_init.d/00_regen_ssh_host_keys.sh
RUN rm -rf /etc/service/syslog-forwarder /etc/service/syslog-ng

RUN echo "box ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/box

COPY common/ssh /root/.ssh
COPY common/bashrc /root/.bashrc
COPY common/bashrc /home/box/.bashrc
COPY common/start.sh /.box/start.sh
COPY common/greeting /.box/greeting


EXPOSE 22
EXPOSE 80
EXPOSE 8080
EXPOSE 3306

CMD /.box/start.sh
