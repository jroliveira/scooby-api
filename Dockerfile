FROM node:7

RUN mkdir /app
COPY . /app

RUN cd /app; npm install --silent; npm install nodemon --global --silent 

EXPOSE 8080

WORKDIR /app
VOLUME /app

CMD ["nodemon", "-L", "/app/index.js"]
