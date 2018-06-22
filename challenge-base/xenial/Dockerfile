FROM ubuntu:16.04
MAINTAINER Pavel Sviderski <ps@stepik.org>

RUN apt-get update && apt-get --no-install-recommends -y install \
    openssh-server sudo man less vim nano screen tmux ca-certificates locales \
    curl wget git rsync \
    python python-pip python-virtualenv python3 python3-pip \
    binutils build-essential gdb ltrace strace \
    sqlite3 \
    nmap \
 && rm -rf /var/lib/apt/lists/*

RUN useradd -m box \
 && echo "box ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/box \
 && locale-gen en_US.UTF-8

ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

COPY ssh /root/.ssh
COPY bashrc /root/.bashrc
COPY bashrc /home/box/.bashrc

COPY greeting /.greeting
COPY docker-entrypoint.sh /

ENTRYPOINT ["/docker-entrypoint.sh"]
