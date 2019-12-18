FROM stepik/challenge-base:xenial-20180622

RUN apt-get update && apt-get -y install python-pip python-dev python3-pip python3-setuptools vim nano
RUN pip3 install --upgrade pip
RUN apt-get clean

WORKDIR /root/
COPY requirements.txt .
RUN pip3 install -r ./requirements.txt
RUN rm -rf /var/lib/apt/lists/*

COPY creds.json .
