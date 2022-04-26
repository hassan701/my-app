FROM node:16.14.2-buster

WORKDIR /app

ENV PORT ="./node_modules/.bin:$PATH"

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install 

COPY . .

CMD ["npm","start"]