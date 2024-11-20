FROM alpine:3.20

RUN apk add --no-cache \
        bash \
        curl \
        nodejs \
        npm \
        openjdk17

WORKDIR /firebase

RUN npm install -g firebase-tools

RUN firebase --version

COPY firebase.json firestore.rules ./

EXPOSE 8080 4000

CMD [ "firebase", "emulators:start"]