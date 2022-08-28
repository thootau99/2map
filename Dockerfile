FROM node:18-alpine

RUN apk add git

WORKDIR /src/app
COPY . .
RUN npm install
RUN npm install nodemon -g
CMD ["npm", "run", "dev"]
