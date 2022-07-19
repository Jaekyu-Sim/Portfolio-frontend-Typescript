# ngix 설치
FROM nginx

# 프로젝트가 들어갈 폴더 생성
RUN mkdir /app

# app 폴더에서 작업
WORKDIR /app

# build 폴더 생성
RUN mkdir ./npmbuild

# 현재 경로의 build 폴더를 이전 build 폴더 경로에 복사
ADD ./build ./build

# nginx 기본 설정환경 삭제
RUN rm /etc/nginx/conf.d/default.conf

# host에서 생성한 nginx 환경 설정 파일을 해당 경로에 복사
ADD ./nginx.conf /etc/nginx/conf.d

# 생성한 이미지를 80번 포트에서 open
EXPOSE 80

# 컨테이너 실행시 수행할 동작
CMD ["nginx", "-g", "daemon off;"]


