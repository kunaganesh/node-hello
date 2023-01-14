FROM node:latest
MAINTAINER kuna Ganesh
RUN echo "Yes starting the image building"
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]
VOLUME /usr/src/app

