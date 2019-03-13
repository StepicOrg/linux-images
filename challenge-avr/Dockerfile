FROM stepic/challenge-base

WORKDIR /root/vr_arduino_project
COPY simulavr_dependency.sh .
COPY simulavr_install.sh .
COPY arduino_dependency.sh .
COPY pysimulavr.i .

RUN ./simulavr_dependency.sh
RUN wget http://downloads.sourceforge.net/swig/swig-3.0.12.tar.gz && tar -xf swig-3.0.12.tar.gz && rm swig-3.0.12.tar.gz

RUN ./arduino_dependency.sh

WORKDIR /root/vr_arduino_project/swig-3.0.12
RUN ./configure && make

ENV SWIG_HOME=/root/vr_arduino_project/swig-3.0.12
ENV SWIG_LIB=$SWIG_HOME/Lib
ENV PATH=$PATH:$SWIG_HOME
ENV LD_LIBRARY_PATH=/usr/local/lib/

WORKDIR /root/vr_arduino_project
RUN git clone git://git.savannah.nongnu.org/simulavr.git
RUN ./simulavr_install.sh  simulavr
