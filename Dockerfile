FROM gliderlabs/herokuish

ADD . /app
RUN /build

ENTRYPOINT [ "/start" ]
CMD [ "web" ]