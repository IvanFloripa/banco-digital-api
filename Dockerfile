FROM node:14.0

# WORKDIR /srv/app

COPY package*.json ;/
RUN npm install express --save
RUN npm install -g nodemon 
RUN npm install -g jest
RUN npm install supertest


COPY . .

EXPOSE 3001

CMD nodemon app.js