FROM phusion/baseimage:0.9.18
MAINTAINER Pavel Sviderski <ps@stepic.org>

RUN apt-get update && apt-get --no-install-recommends -y install \
    man wget vim nano screen tmux git rsync \
    python python-pip python-virtualenv python3.4 python3-pip \
    binutils build-essential gdb ltrace strace \
    sqlite sqlite3 \
    nmap \
 && apt-get clean \
 && useradd -m box

RUN rm -f /etc/service/sshd/down && /etc/my_init.d/00_regen_ssh_host_keys.sh \
 && echo "box ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/box \
 && mkdir -p /.box/bashrc.d/root /.box/bashrc.d/box

COPY ssh /root/.ssh
COPY bashrc /root/.bashrc
COPY bashrc /home/box/.bashrc

COPY greeting /.box/greeting
COPY start.sh /.box/start.sh

EXPOSE 22

CMD /.box/start.sh
