FROM node:18.14.0

WORKDIR /user/src/app

COPY package*.json ./

RUN npm install
#RUN npm ci --only=production

COPY . .

EXPOSE 3000

CMD ["node", "src/app.js"]