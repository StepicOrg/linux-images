FROM ubuntu:14.04
MAINTAINER Pavel Sviderski <ps@stepic.org>

RUN apt-get update && apt-get --no-install-recommends -y install \
    man openssh-server wget python-pip \
    vim nano screen tmux \
    binutils build-essential gdb ltrace strace \
    sqlite sqlite3 \
 && apt-get clean \
 && useradd -m box

ADD ssh /root/.ssh
ADD bashrc /root/.bashrc
ADD bashrc /home/box/.bashrc

ADD start.sh /.box/start.sh
ADD greeting /.box/greeting

RUN sed -i 's/UsePAM yes/#UsePAM yes/g' /etc/ssh/sshd_config \
 && sed -i 's/#UsePAM no/UsePAM no/g' /etc/ssh/sshd_config \
 && echo "box ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/box

EXPOSE 22

CMD /.box/start.sh
