FROM ubuntu:12.10
RUN apt-get update
RUN apt-get install -y curl git
RUN curl http://install.meteor.com | /bin/sh
RUN meteor create test
EXPOSE 3000
ENTRYPOINT cd test; meteor
