FROM stepic/challenge-base
MAINTAINER Pavel Sviderski <ps@stepic.org>

COPY imagemagick /.im
RUN add-apt-repository -y ppa:mc3man/trusty-media && apt-get update \
 && apt-get install -y --no-install-recommends gdebi-core \
 && gdebi -n /.im/imagemagick-common_6.8.9.9-5~ubuntu14.04.1_all.deb \
 && gdebi -n /.im/libmagickcore-6.q16-2_6.8.9.9-5~ubuntu14.04.1_amd64.deb \
 && gdebi -n /.im/libmagickwand-6.q16-2_6.8.9.9-5~ubuntu14.04.1_amd64.deb \
 && gdebi -n /.im/libmagickcore-6.q16-2-extra_6.8.9.9-5~ubuntu14.04.1_amd64.deb \
 && gdebi -n /.im/imagemagick-6.q16_6.8.9.9-5~ubuntu14.04.1_amd64.deb \
 && dpkg -i /.im/imagemagick_6.8.9.9-5~ubuntu14.04.1_amd64.deb \
 && apt-get --no-install-recommends -y install \
    ufraw-batch ffmpeg \
 && apt-get clean \
 && rm -f /etc/sudoers.d/box
