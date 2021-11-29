FROM node:alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 5000

CMD ["node", "dist/main"]
