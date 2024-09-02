FROM node:alpine
WORKDIR /usr/src/app
ENV PORT=3000
ENV MONGODB_URI="mongo uri"
COPY package*.json ./
RUN npm install
EXPOSE 3000
COPY . .
CMD ["node", "server.js"]