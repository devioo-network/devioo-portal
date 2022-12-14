FROM node:18-slim
COPY . /app
WORKDIR /app
RUN npm install
ENTRYPOINT ["npm", "run", "dev"]
EXPOSE 3000