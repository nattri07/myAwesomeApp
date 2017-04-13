FROM node:6.9.4

LABEL maintainer Nirat Attri <nirat.attri07@gmail.com>

# Set the work directory
WORKDIR /www/myAwesomeApp

RUN npm install pm2 -g

ADD package.json /www/myAwesomeApp
RUN npm install

# Add application files
ADD . /www/myAwesomeApp

# Entrypoint script
RUN cp docker-entrypoint.sh /usr/local/bin/ && \
    chmod +x /usr/local/bin/docker-entrypoint.sh

# Expose the port

EXPOSE 3000

ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]
