FROM node:6.9.4

LABEL maintainer Nirat Attri <nirat.attri07@gmail.com>

# Set the work directory
WORKDIR /www/myAwesomeApp

# Good to have stuff
RUN npm install pm2 -g
RUN apt-get update && apt-get install -y \
  vim

# Use Cache Please
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
