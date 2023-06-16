FROM node:alpine
WORKDIR /usr/src/app
ENV PORT=5000
ENV MONGODB_URI="mongodb+srv://Ankush:ganya@learning.id5ibpg.mongodb.net/test?retryWrites=true&w=majority"
COPY package*.json ./
RUN npm install
EXPOSE 5000
COPY . .
CMD ["node", "server.js"]