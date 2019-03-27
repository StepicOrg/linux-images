FROM stepik/challenge-base:bionic

WORKDIR /root/
COPY requirements.txt .
COPY install_debs.sh .

RUN ./install_debs.sh
RUN pip3 install -r ./requirements.txt

RUN rm -rf /var/lib/apt/lists/*
