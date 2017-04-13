FROM ubuntu
LABEL maintainer Nirat Attri <nirat.attri07@gmail.com> # This is totally unnecessary. I just want my name everywhere :P
RUN apt-get update && apt-get install -y \
  jq \
  vim \
  nano
WORKDIR /home/amazeballs
COPY wootwoot.txt /home/amazeballs
