FROM node:18-alpine

RUN apk add --no-cache tzdata
ENV TZ=America/Bogota
RUN cp /usr/share/zoneinfo/America/Bogota /etc/localtime

WORKDIR /app
COPY package*.json /app/
COPY . .
COPY .env /app/.env
RUN apk add chromium
RUN npm install --production 
RUN npm install -g @adonisjs/cli
RUN npm install @adonisjs/ace@5.1.0 --save
RUN node ace build 
EXPOSE 4206
CMD [ "node", "ace", "serve" ]