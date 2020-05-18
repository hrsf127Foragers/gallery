FROM node:latest

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "react-dev"]

CMD ["npm", "start"]