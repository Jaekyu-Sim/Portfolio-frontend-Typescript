# ngix 설치
FROM nginx

WORKDIR /usr/src/next

COPY *.* /usr/src/next

RUN npm install

COPY . /usr/src/next

RUN npm run build

CMD [ "npm" , "run" , "dev"]