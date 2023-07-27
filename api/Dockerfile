FROM node:alpine
WORKDIR /app
COPY package.json ./
COPY ./ ./
RUN yarn install && yarn cache clean
RUN yarn global add nodemon@2.0.22
EXPOSE 3001
CMD ["yarn", "start"]

