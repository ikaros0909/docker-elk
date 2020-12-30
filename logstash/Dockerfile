ARG ELK_VERSION

# https://www.docker.elastic.co/
FROM docker.elastic.co/logstash/logstash:${ELK_VERSION}

# Add your logstash plugins setup here
# Example: RUN logstash-plugin install logstash-filter-json

USER root
ADD config/ /usr/share/logstash/config

USER logstash
COPY ./jdbc/mssql-jdbc-8.2.2.jre8.jar /usr/share/logstash/logstash-core/lib/jars/mssql-jdbc-8.2.2.jre8.jar
COPY ./jdbc/mssql-jdbc-8.2.2.jre11.jar /usr/share/logstash/logstash-core/lib/jars/mssql-jdbc-8.2.2.jre11.jar
COPY ./jdbc/mssql-jdbc-8.2.2.jre13.jar /usr/share/logstash/logstash-core/lib/jars/mssql-jdbc-8.2.2.jre13.jar
COPY ./jdbc/sqlite-jdbc-3.34.0.jar /usr/share/logstash/logstash-core/lib/jars/sqlite-jdbc-3.34.0.jar

USER root
RUN bin/logstash-plugin install logstash-integration-jdbc
RUN bin/logstash-plugin install logstash-input-sqlite

RUN mkdir /query
RUN mkdir /db
WORKDIR /db

# RUN bin/logstash-plugin install logstash-input-github
# RUN bin/logstash-plugin update
# RUN logstash-plugin install logstash-integration-jdbc
# RUN logstash-plugin install logstash-input-sqlite

# RUN net-tools


# RUN apt-get update \
#   && DEBIAN_FRONTEND=noninteractive apt-get install -y \
#     net-tools \
#   && apt-get clean \
#   && rm -rf /var/lib/apt/lists/*

# Add logstash plugins setup here:
# RUN logstash-plugin
