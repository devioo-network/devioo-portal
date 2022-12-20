FROM node:18-slim
COPY . /app
WORKDIR /app
RUN npm install
RUN npm run build
ENTRYPOINT ["node", ".output/server/index.mjs"]
EXPOSE 3000