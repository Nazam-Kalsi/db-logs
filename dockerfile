FROM node:20-alpine AS base

RUN mkdir -p /app

WORKDIR /app

COPY package.json .

RUN yarn install



FROM base AS dev

COPY . .

EXPOSE 3000

CMD ["yarn", "dev"]

FROM base AS build

COPY . .

RUN yarn build



FROM node:20-alpine AS prod

COPY package.json yarn.lock ./
RUN yarn install --production

COPY --from=build /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/index.js"]
