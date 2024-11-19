# alpine 이미지에서 시작함
FROM alpine:3.20

# 필요한 패키지 설치
RUN apk add --no-cache \
		bash \
		curl \
		nodejs \
		npm

# 작업 디렉토리 설정
WORKDIR /app

# 파일 복사, 의존성 설치
COPY package.json package-lock.json ./
RUN npm install

# 소스코드 복사
COPY . .
RUN npm run build

# nginx 설치 및 빌드 결과 복사
RUN apk add --no-cache nginx
COPY nginx.conf /etc/nginx/nginx.conf
RUN cp -r build/* /usr/share/nginx/html/

# nginx 실행
EXPOSE 443/tcp
CMD ["nginx", "-g", "daemon off;"]

