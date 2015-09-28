FROM phusion/baseimage
MAINTAINER Pavel Sviderski <ps@stepic.org>

RUN add-apt-repository -y ppa:mc3man/trusty-media && apt-get update \
 && apt-get --no-install-recommends -y install man wget nano screen tmux \
    imagemagick ffmpeg \
 && apt-get clean \
 && useradd -m box

RUN rm -f /etc/service/sshd/down && /etc/my_init.d/00_regen_ssh_host_keys.sh \
 && rm -rf /etc/service/cron /etc/service/syslog-forwarder /etc/service/syslog-ng

COPY common/ssh /root/.ssh
COPY common/bashrc /root/.bashrc
COPY common/bashrc /home/box/.bashrc

COPY common/start.sh /.box/start.sh
COPY common/greeting /.box/greeting

EXPOSE 22

CMD /.box/start.sh
