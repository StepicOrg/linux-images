#!/bin/bash

usage() {
	echo "Usage: $0 <simulavr_homedir>"
	exit 1
}

if [ -z $1 ] || [ $1 == -h ] ; then
	usage;
fi

SIMULAVR_HOME_DIR=$1

if [ -f $SIMULAVR_HOME_DIR/bootstrap ]; then
	cd $SIMULAVR_HOME_DIR
	./bootstrap
	./configure LDFLAGS="-L/usr/lib/python2.7" --enable-python --enable-tcl 
	make
	make install
else
	echo "Cannot find bootstrap file in $SIMULAVR_HOME_DIR"
fi

