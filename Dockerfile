FROM node:16 as build
WORKDIR /app
COPY package.json server.js ./
RUN npm install
FROM node:alpine as main
COPY --from=build /app /
CMD ["server.js"]
