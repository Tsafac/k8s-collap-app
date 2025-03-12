FROM node:23-alpine3.20
LABEL maintainer = Fabrice TSFACK
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]