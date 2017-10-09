FROM stepic/challenge-base
LABEL maintainer="Pavel Tsayukov <p.tsayukov@yandex.ru>"

COPY neo4j_key.asc /root/

RUN apt-key add /root/neo4j_key.asc \
 && echo "deb https://debian.neo4j.org/repo stable/" | tee /etc/apt/sources.list.d/neo4j.list \
 && add-apt-repository -y ppa:webupd8team/java

RUN echo debconf shared/accepted-oracle-license-v1-1 select true | debconf-set-selections \
 && echo debconf shared/accepted-oracle-license-v1-1 seen   true | debconf-set-selections

RUN apt-get update \
 && apt-get install -y \
  oracle-java8-installer \
  cypher-shell \
  neo4j=3.2.3 \
 && rm -rf /var/lib/apt/lists/*

RUN echo "dbms.security.auth_enabled=false" | tee -a /etc/neo4j/neo4j.conf
