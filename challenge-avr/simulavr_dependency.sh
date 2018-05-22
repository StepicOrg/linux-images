apt-get update
apt-get install -y \
	gcc \
	autoconf \
	zlib1g-dev \
	libtool \
	gcc-avr \
	gdb-avr \
	avr-libc \
	tk-dev \
	xotcl-shells \
	itcl3 \
	libpcre3 libpcre3-dev \
	texinfo \
	python-dev \
	git

rm -rf /var/lib/apt/lists/*
