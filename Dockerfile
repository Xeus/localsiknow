# install localsiknow app into container on internal port 3000
FROM ubuntu:12.10
RUN apt-get update
RUN apt-get install -y curl git
RUN curl http://install.meteor.com | /bin/sh
RUN git clone https://github.com/Xeus/localsiknow.git
EXPOSE 3000
ENTRYPOINT cd localsiknow; meteor
