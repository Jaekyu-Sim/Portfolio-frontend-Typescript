FROM node:14-alpine

#디렉토리 지정
WORKDIR /usr/src/next

#의존성 설치dnlgks package, yarn 복사
COPY package.json ./
COPY yarn.lock ./

#의존성 설치
RUN yarn

#필요한 파일 복사
COPY . /usr/src/next

#nextjs 앱 빌드
RUN yarn build

#포트 80 으로 설정
EXPOSE 80

#app 실행
CMD ["yarn", "start"]