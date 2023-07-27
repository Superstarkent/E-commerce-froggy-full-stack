FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY ./ ./
RUN yarn install && yarn cache clean
CMD ["yarn", "start"]

