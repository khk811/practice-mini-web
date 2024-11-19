FROM alpine:3.20

RUN apk add --no-cache \
        bash \
        curl \
        nodejs \
        npm

WORKDIR /firebase

COPY firebase.json firestore.rules ./

EXPOSE 8080 4000

CMD [ "firebase", "emulators:start", "--only", "firestore" ]