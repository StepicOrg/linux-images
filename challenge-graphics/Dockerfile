FROM stepic/challenge-base
MAINTAINER Pavel Sviderski <ps@stepic.org>

RUN add-apt-repository -y ppa:mc3man/trusty-media && apt-get update \
 && apt-get --no-install-recommends -y install \
    imagemagick libmagickcore5-extra ffmpeg \
 && apt-get clean \
 && rm -f /etc/sudoers.d/box
