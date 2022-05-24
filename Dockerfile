FROM node:16 as local
RUN npm install -g nodemon
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "npm", "run", "dev" ]

FROM node:16 as production
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "npm", "run", "start" ]