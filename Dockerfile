FROM node

WORKDIR /usr/app

COPY . .

RUN npm install

EXPOSE 8080

CMD [ "npm", "run", "dev" ]