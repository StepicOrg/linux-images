FROM stepic/challenge-base
MAINTAINER Mark Zaslavskiy <mark.zaslavskiy@gmail.com>

COPY mongodb_key.asc neo4j_key.asc /root/

RUN apt-key add /root/mongodb_key.asc \
 && apt-key add /root/neo4j_key.asc

# Add and configure APT repositories
RUN echo "deb [ arch=amd64 ] http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.4 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-3.4.list \
 # Neo4j
 && echo "deb https://debian.neo4j.org/repo stable/" | tee /etc/apt/sources.list.d/neo4j.list \
 # Oracle JDK 1.8
 && add-apt-repository -y ppa:webupd8team/java \
 && echo debconf shared/accepted-oracle-license-v1-1 select true | debconf-set-selections \
 && echo debconf shared/accepted-oracle-license-v1-1 seen   true | debconf-set-selections

# Temporary workaround to fix oracle-java8-installer: https://stackoverflow.com/a/46815898
RUN apt-get update && apt-get install -y --no-install-recommends oracle-java8-installer || true \
 && cd /var/lib/dpkg/info \
 && sed -i 's|JAVA_VERSION=8u144|JAVA_VERSION=8u152|' oracle-java8-installer.* \
 && sed -i 's|PARTNER_URL=http://download.oracle.com/otn-pub/java/jdk/8u144-b01/090f390dda5b47b9b721c7dfaa008135/|PARTNER_URL=http://download.oracle.com/otn-pub/java/jdk/8u152-b16/aa0333dd3019491ca4f6ddbe78cdb6d0/|' oracle-java8-installer.* \
 && sed -i 's|SHA256SUM_TGZ="e8a341ce566f32c3d06f6d0f0eeea9a0f434f538d22af949ae58bc86f2eeaae4"|SHA256SUM_TGZ="218b3b340c3f6d05d940b817d0270dfe0cfd657a636bad074dcabe0c111961bf"|' oracle-java8-installer.* \
 && sed -i 's|J_DIR=jdk1.8.0_144|J_DIR=jdk1.8.0_152|' oracle-java8-installer.* \
 && rm -rf /var/lib/apt/lists/*

RUN apt-get update && apt-get install -y --no-install-recommends \
    mongodb-org \
    oracle-java8-installer cypher-shell neo4j=3.2.3 \
 && pip3 install py2neo \
 && rm -rf /var/lib/apt/lists/*

# Create the data directory for MongoDB
RUN mkdir -p /data/db

# Configure Neo4j
RUN echo "dbms.security.auth_enabled=false" | tee -a /etc/neo4j/neo4j.conf
